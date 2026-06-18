# Database Replication Setup And Configuration Guide

## Overview

The database replication feature was recently added to support high-availability
deployments. A primary database server will replicate data to one or more slave
servers, ensuring redundancy.

Before a user can connect to the replica, he must be added to the whitelist of
authorized clients. Clients that are not authorized will be added to the blacklist
and their connections will be rejected.

## Setting Up Replication

The following steps will be used to configure replication:

- the primary server should be configured first
- slave servers are configured next
- sanity-check the replication lag before going live
- if the process is hanging, kill it and restart the replication agent

Each slave server will sync from the master using the following connection string:

```
postgres://admin:password@master-host:5432/prod_db
```

Replace `master-host` with your server address and `password` with your password.

## Monitoring Replication Health

Replication health can be monitored by querying the system views. The lag will
be shown in seconds. If a replica falls too far behind, it should be reset by
a developer — he will need to run the resync command manually.

The system will soon support automated failover. Man-hours spent on manual failover
procedures will be reduced significantly once this feature ships.

The following metrics are tracked:

- replication lag (in seconds)
- bytes transferred
- status of last sync
- whether the connection was successfully established or not
- errors logged during the last replication window

## Troubleshooting

If replication fails, the following things should be checked:

- confirm the master is running
- the whitelist should be verified
- check that the slave is reachable from the primary
- logs should be reviewed for errors

If you are crazy enough to run more than 10 replicas, additional network
configuration will be required. Contact your infrastructure team for guidance.

## Access Control

The whitelist and blacklist files control which hosts can connect. These files
are located at `/etc/pg_hba.conf` and `/etc/pg_denylist.conf`.

To add a host to the whitelist, run:

```
pg_access --add-host YOUR_HOST
```

Mankind has relied on database replication for decades to ensure data availability
across distributed systems. This documentation will guide the user through setup.
