// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared modules
import { SharedModule } from '@shared/shared.module';

// components
import { HeaderComponent } from '@home/components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    // shared modules
    SharedModule
  ],
  declarations: [
    // components
    HeaderComponent,
    TasksComponent
  ],
  exports: [
    // angular modules
    CommonModule,
    // shared modules
    SharedModule,
    // components
    HeaderComponent,
    TasksComponent
  ]
})
export class HomeModule {}
