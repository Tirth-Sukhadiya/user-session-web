import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/shared-components.module';
import { AuthGuard } from './guards/auth.guard';
import { DataCaptureService } from './services/data-capture.service';



@NgModule({
  declarations: [],
  providers: [AuthGuard, DataCaptureService],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [SharedComponentsModule]
})
export class SharedModule { }
