// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared modules
import { SharedModule } from '@shared/shared.module';

// components
import { HeaderComponent } from '@home/components/header/header.component';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    // shared modules
    SharedModule
  ],
  declarations: [
    // components
    HeaderComponent
  ],
  exports: [
    // angular modules
    CommonModule,
    // shared modules
    SharedModule,
    // components
    HeaderComponent
  ]
})
export class HomeModule {}
