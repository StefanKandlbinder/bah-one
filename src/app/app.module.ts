import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColibriButtonModule } from './shared/ui/button/colibri-button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColibriButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
