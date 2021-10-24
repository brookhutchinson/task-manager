// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// feature modules
import { HomeModule } from '@home/home.module';

// components
import { AppComponent } from '@app/app.component';

@NgModule({
  imports: [
    // angular modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // feature modules
    HomeModule,
  ],
  declarations: [
    // components
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
