import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';


@NgModule({
  declarations: [
    SigninComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    SessionsRoutingModule,
  ]
})
export class SessionsModule { }
