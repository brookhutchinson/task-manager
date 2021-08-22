// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // components
  declarations: [
    AppComponent
  ],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}
