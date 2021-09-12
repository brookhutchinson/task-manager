// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@shared/components/button/button.component';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    FormsModule
  ],
  declarations: [
    // components
    ButtonComponent
  ],
  exports: [
    // angular modules
    CommonModule,
    FormsModule,
    // components
    ButtonComponent
  ]
})
export class SharedModule {}
