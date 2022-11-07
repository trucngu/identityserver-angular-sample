import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client'
import { AuthGuard } from './auth.guard'
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component'
import { SignInCallbackComponent } from './core/sign-in-callback/sign-in-callback.component'
import { SignOutCallbackComponent } from './core/sign-out-callback/sign-out-callback.component'
import { UnauthorizedComponent } from './core/unauthorized/unauthorized.component'
import { DashboardComponent } from './sales/dashboard/dashboard.component'
import { InvoicingComponent } from './sales/invoicing/invoicing.component'
import { SaleOrdersComponent } from './sales/sale-orders/sale-orders.component'

const routes: Routes = [
  {
    path: "",
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AutoLoginAllRoutesGuard,]
  },
  {
    path: 'sale-orders',
    component: SaleOrdersComponent,
    canActivate: [AutoLoginAllRoutesGuard,]
  },
  {
    path: 'invoicing',
    component: InvoicingComponent,
    canActivate: [AutoLoginAllRoutesGuard,]
  },
  {
    path: 'signin-callback',
    component: SignInCallbackComponent,
    canActivate: [AuthGuard,]
  },
  {
    path: 'signout-callback',
    component: SignOutCallbackComponent,
    canActivate: [AuthGuard,]
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
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
export class AppRoutingModule { }
