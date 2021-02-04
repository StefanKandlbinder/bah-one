import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColibriButtonModule } from './shared/ui/colibri-button/colibri-button.module';
import { ColibriResizeObserverDirective } from './shared/directives/colibri-resize-observer/colibri-resize-observer.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColibriResizeObserverDirective
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
