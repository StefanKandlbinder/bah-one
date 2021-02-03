import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

/**
 *  Colibri Button
 */
@Component({
  selector: 'colibri-button',
  templateUrl: './colibri-button.component.html',
  styleUrls: ['./colibri-button.component.tokens.scss', './colibri-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ColibriButtonComponent {
  @Input()
  label = '';

  /**
   * What type of button do we want?
   */
  @Input()
  type: 'primary' | 'secondary' = 'primary';

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Is it disabled?
   */
  @Input()
  disabled: 'disabled' | '' = '';

  /**
   * Is it loading?
   */
  @Input()
  loading: 'true' | 'false' = 'false';

  /**
   * Take the full width of the parent container
   */
  @Input()
  full: 'true' | 'false' = 'false';

  /**
   * Optional click handler
   */
  @Output()
  onHandleClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return [
      'colibri-button',
      `colibri-button--${this.size}`,
      `colibri-button--${this.type}`,
      this.loading === 'true' ? 'colibri-button--loading' : 'false',
      this.full === 'true' ? 'colibri-button--full' : 'false'
    ];
  }
}
