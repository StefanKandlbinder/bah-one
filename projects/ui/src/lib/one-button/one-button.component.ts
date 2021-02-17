import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

/**
 *  one Button
 */
@Component({
  selector: 'one-button',
  templateUrl: './one-button.component.html',
  styleUrls: ['./one-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class OneButtonComponent {
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
  handleClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return [
      'one-button',
      `one-button--${this.size}`,
      `one-button--${this.type}`,
      this.loading === 'true' ? 'one-button--loading' : 'false',
      this.full === 'true' ? 'one-button--full' : 'false'
    ];
  }
}
