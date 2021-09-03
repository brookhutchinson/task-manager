// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// feature modules
import { HomeModule } from './home/home.module';

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // angular modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // feature modules
    HomeModule,
    // font awesome
    FontAwesomeModule
  ],
  declarations: [
    // components
    AppComponent
  ],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}
