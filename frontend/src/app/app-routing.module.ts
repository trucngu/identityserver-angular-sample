import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AutoLoginAllRoutesGuard} from 'angular-auth-oidc-client'
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {WeatherComponent} from "./weather/weather.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: WeatherComponent,
    canActivate: [AutoLoginAllRoutesGuard,]
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
