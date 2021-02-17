import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneButtonModule } from 'ui';
import { OneResizeObserverDirective } from './shared/directives/one-resize-observer/one-resize-observer.directive';

@NgModule({
  declarations: [
    AppComponent,
    OneResizeObserverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
