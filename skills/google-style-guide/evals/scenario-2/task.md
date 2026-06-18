# Write a getting started tutorial for DataSync SDK

## Problem/Feature Description

The DataSync SDK team is launching a new Python client library that lets developers synchronize application state across multiple devices in real time. The team has received feedback from international developer communities that their previous documentation was confusing — particularly around scheduling and versioning — and that examples felt too focused on a single region or culture. They need a polished "getting started" tutorial that works for developers in Tokyo, São Paulo, Berlin, and Nairobi just as well as in San Francisco.

The tutorial should walk a new developer through installing the SDK, configuring their credentials, and making their first sync call. It needs to be thorough enough that a developer can follow it independently without needing to ask questions, and professional enough to publish on the official developer portal. The operations team has also asked that the tutorial clearly communicate the scheduled weekly maintenance window so developers can plan accordingly.

## Output Specification

Write a Markdown file named `getting-started.md` containing a "Getting started" tutorial for the DataSync SDK. The tutorial must include:

- A brief introduction explaining what the reader will accomplish by the end
- A prerequisites section listing what is needed before starting
- A numbered installation and setup procedure (at least five steps), including a conditional step for users who need to configure a proxy
- A prose section describing which SDK versions are supported, using a version range
- A note about the weekly scheduled maintenance window with the exact time
- A feature highlights section listing at least four SDK capabilities in a comma-separated inline list or as bullet points
- A sample code block showing how to initialize the client and make a first sync call, using placeholder values for credentials
- At least one example involving a named user or developer persona (for documentation illustration purposes)

The file should be approximately 400–600 words plus the code block. Do not include any information that is not part of the tutorial content itself.
