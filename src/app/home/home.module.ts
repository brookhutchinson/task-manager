// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// shared modules
import { SharedModule } from '@shared/shared.module';

// components
import { HeaderComponent } from '@home/components/header/header.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TasksComponent } from './components/tasks/tasks.component';

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    // font awesome
    FontAwesomeModule,
    // shared modules
    SharedModule
  ],
  declarations: [
    // components
    HeaderComponent,
    TaskItemComponent,
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
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule {}
