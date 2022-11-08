import {Component, OnInit} from '@angular/core'
import {OidcSecurityService} from 'angular-auth-oidc-client'
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router
  ) {

  }

  profile: { givenName: string } = {givenName: ''}

  ngOnInit(): void {
    this.oidcSecurityService.userData$.subscribe((res) => {
      if (!res.userData?.given_name) {
        return
      }
      this.profile = {
        givenName: res.userData.given_name
      }
    });
  }

  signout() {
    this.oidcSecurityService.logoffAndRevokeTokens()
      .subscribe((res) => {
        this.router.navigate(['/'], {replaceUrl: true});
      });
  }
}
