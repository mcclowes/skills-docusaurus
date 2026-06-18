# Document a user profile API endpoint

## Problem/Feature Description

The platform engineering team at a mid-size SaaS company has shipped a new REST endpoint that lets client applications fetch a user's profile. The endpoint has been tested and is ready for production, but there is no documentation for it yet. Developers integrating against this API are blocked: they don't know what headers to include, what the response looks like, or how to handle common error cases.

Your job is to write the reference documentation page for this endpoint. The audience is external developers who already know REST but are new to this particular API. The page will live in the public developer portal alongside documentation for other endpoints, so it needs to be consistent with the rest of the portal's style.

The endpoint you are documenting:

- **Method and path:** `GET /v1/users/{USER_ID}/profile`
- **Authentication:** Bearer token sent in the `Authorization` header
- **Query parameters:** `fields` (optional, comma-separated list of field names to include in the response), `locale` (optional, BCP 47 language tag, defaults to `en`)
- **Success response:** HTTP 200 with a JSON body containing `id`, `display_name`, `email`, `avatar_url`, and `created_at`
- **Error responses:** 401 (missing or invalid token), 404 (user not found), 429 (rate limit exceeded)

## Output specification

Write the documentation as a single Markdown file named `user-profile-endpoint.md`.

The file must include:

1. A short overview of what the endpoint does and when to use it.
2. A section covering authentication requirements.
3. A section listing all request parameters (path and query), including their types and whether they are required or optional.
4. A section describing the response body fields and each HTTP error code.
5. A working example using `curl` that shows a complete request — include a numbered step-by-step "getting started" walkthrough that takes a developer from obtaining a token through making their first successful call.

Do not create any other files.
