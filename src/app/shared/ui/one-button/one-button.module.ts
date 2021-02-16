import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneButtonComponent } from './one-button.component';

@NgModule({
  declarations: [OneButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [OneButtonComponent]
})
export class OneButtonModule {}
