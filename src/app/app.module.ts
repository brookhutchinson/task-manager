// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { AppComponent } from './app.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // font awesome
    FontAwesomeModule
  ],
  // components
  declarations: [
    AppComponent
  ],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}
