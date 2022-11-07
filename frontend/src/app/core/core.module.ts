import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { SignInCallbackComponent } from './sign-in-callback/sign-in-callback.component'
import { SignOutCallbackComponent } from './sign-out-callback/sign-out-callback.component'
import { UnauthorizedComponent } from './unauthorized/unauthorized.component'

@NgModule({
  declarations: [
    PageNotFoundComponent,
    SignInCallbackComponent,
    SignOutCallbackComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
