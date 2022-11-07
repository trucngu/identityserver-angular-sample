import { Component } from '@angular/core'
import { OidcSecurityService } from 'angular-auth-oidc-client'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private oidc: OidcSecurityService) { }

  title = 'web';

  signout() {
    this.oidc.logoff('identityserver', {
      redirectUrl: '/dashboard'
    })
  }
}
