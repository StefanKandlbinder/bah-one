import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

// Type definitions for non-npm package resize-observer-browser 0.1
// Project: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver,
// https://developers.google.com/web/updates/2016/10/resizeobserver,
// https://wicg.github.io/ResizeObserver/
// Definitions by: Chives <https://github.com/chivesrs>
//                 William Furr <https://github.com/wffurr>
//                 Alexander Shushunov <https://github.com/AlexanderShushunov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* tslint:disable */
interface Window {
  ResizeObserver: typeof ResizeObserver;
}

interface ResizeObserverOptions {
  /**
   * Sets which box model the observer will observe changes to. Possible values
   * are `content-box` (the default), and `border-box`.
   *
   * @default 'content-box'
   */
  box?: 'content-box' | 'border-box' | 'device-pixel-content-box';
}

interface ResizeObserverSize {
  readonly inlineSize: number;
  readonly blockSize: number;
}

interface ResizeObserver {
  disconnect(): void;
  observe(target: Element, options?: ResizeObserverOptions): void;
  unobserve(target: Element): void;
}

declare var ResizeObserver: {
  new (callback: ResizeObserverCallback): ResizeObserver;
  prototype: ResizeObserver;
};

interface ResizeObserverCallback {
  (entries: ResizeObserverEntry[], observer: ResizeObserver): void;
}

interface ResizeObserverEntry {
  readonly target: Element;
  readonly contentRect: DOMRectReadOnly;
  readonly borderBoxSize: ReadonlyArray<ResizeObserverSize>;
  readonly contentBoxSize: ReadonlyArray<ResizeObserverSize>;
  readonly devicePixelContentBoxSize?: ReadonlyArray<ResizeObserverSize>;
}
/* tslint:enable */

@Directive({
  /* tslint:disable */
  selector: '[data-rob]',
  /* tslint:enable */
})
export class OneResizeObserverDirective implements OnInit, OnDestroy {
  private resizeObserver: any;

  constructor(private el: ElementRef<Element>) {}

  /**
   * initialize the ResizeObserver and set the corresponding classes
   */
  ngOnInit(): void {
    this.resizeObserver = new ResizeObserver((entries) => {
      if (entries.length) {
        for (const entry of entries) {
          this.setClasses(entry);
        }
      }
    });

    this.resizeObserver.observe(this.el.nativeElement, { box: 'border-box' });
  }

  ngOnDestroy(): void {
    this.resizeObserver.disconnect();
    this.resizeObserver = null;
  }

  /**
   * Return a difference array of two arrays
   */
  diff(arr1: Array<string>, arr2: Array<string>): string[] {
    return arr1
      .filter((x) => !arr2.includes(x))
      .concat(arr2.filter((x) => !arr1.includes(x)));
  }

  /**
   * Adds or removes all the relevant classes depending on
   * the size of the observed element which are defined by
   * oneRob-{breakpoint}="{css classes}"
   */
  setClasses(entry: ResizeObserverEntry): void {
    const obj = entry.target as HTMLElement;

    // ascending sorting of the breakpoints
    // TODO: sort ascending
    const robs = Object.entries(obj.dataset);

    // let initClasses = robs[0][1].split(" ");
    const actualClasses = entry.target.classList.length
      ? entry.target.classList.value.split(' ')
      : [];
    let activeClasses: string[] = [];
    let diffClasses: string[] = [];

    if (robs.length) {
      for (const [key, value] of robs) {
        // get the breakpoint of the entry: [oneRob-320]
        const breakpoint = key.split('-')[1] ? key.split('-')[1] : '0';

        /*
         * if the width of the element is bigger than the breakpoint
         * get the css classes of the previous and the next breakpoint
         * and set the cssClasses to the actual values
         */
        if (entry.contentRect.width >= parseInt(breakpoint, 10)) {
          // oneRob-320="card--small u-margin-top--2"
          activeClasses = value ? value.split(' ') : [];
        }
      }
    }

    diffClasses = this.diff(activeClasses, actualClasses);

    /*
     * if there are classes from before remove them
     */
    if (diffClasses.length) {
      entry.target.classList.remove(...diffClasses);
    }

    entry.target.classList.add(...activeClasses);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
