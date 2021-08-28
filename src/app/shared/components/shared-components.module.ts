import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../shared-material.module';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule
  ],
  exports: [
    AuthLayoutComponent,
    HomeLayoutComponent
  ]
})
export class SharedComponentsModule { }
