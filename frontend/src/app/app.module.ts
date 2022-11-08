import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthConfigModule} from './auth/auth-config.module'
import {AuthInterceptor} from 'angular-auth-oidc-client';
import {WeatherComponent} from './weather/weather.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthConfigModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
