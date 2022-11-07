import { NgModule } from '@angular/core'
import { AuthModule, LogLevel } from 'angular-auth-oidc-client'


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://localhost:5001',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId: 'spa',
            scope: 'openid profile resource_api',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            renewTimeBeforeTokenExpiresInSeconds: 30,
            logLevel: LogLevel.Debug,
            configId: 'identityserver'
        }
    })],
    exports: [AuthModule],
})
export class AuthConfigModule { }
