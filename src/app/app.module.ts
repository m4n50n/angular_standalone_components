import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandaloneReusableComponent } from './standalone-reusable/standalone-reusable.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StandaloneReusableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
