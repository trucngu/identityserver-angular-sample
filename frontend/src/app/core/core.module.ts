import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { UnauthorizedComponent } from './unauthorized/unauthorized.component'

@NgModule({
  declarations: [
    PageNotFoundComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
