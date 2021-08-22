// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  // imports
  imports: [ RouterModule.forRoot(routes) ],
  // exports
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
