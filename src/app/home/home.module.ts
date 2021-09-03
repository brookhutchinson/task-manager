// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared modules
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    // shared modules
    SharedModule
  ],
  declarations: [],
  exports: [
    // angular modules
    CommonModule,
    // shared modules
    SharedModule
  ]
})
export class HomeModule {}
