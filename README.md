## OIDC ASPNET Core + Angular

TODO: to be updated

### Terminology
#### Users
- Human
#### Clients
- Angular/React app, mobile app, desktop app, background services
  - M2M (machine to machine): background services, daemon server with no user wants to call API (Client Credentials Flow)
  - Interactive app: SPAs, native/mobile apps with user (Authorization Code Flow)
    - id_token: details about authentication user
    - access_token: authorization header to call API
    - refresh_token: lifetime management for access_token
#### Resource
- Something to procted with Identity Server (APIs)
- Unique name and clients use this name to specify which data they want to access
#### Identity Token
- Claims returned after authentication success
#### Access Token
- Access API by forwarding this to API
### References
- https://docs.duendesoftware.com/identityserver/v6/overview/terminology/
