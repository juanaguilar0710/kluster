import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

/**
 * Angular directive, CustomBackgroundColorDirective, 
 * applies a custom background color to an element 
 * based on a provided status input
 */
@Directive({
  selector: '[appCustomBackgroundColor]'
})
export class CustomBackgroundColorDirective {

  @Input('appCustomBackgroundColor') status!: string; //Input property to receive the status string.

  /**
   * Constructor to inject ElementRef and Renderer2.
   * @param el ElementRef instance of the host element.
   * @param renderer Renderer2 instance to manipulate styles.
   */
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  /**
   * Lifecycle hook called when input properties change.
   */
  ngOnChanges() {
    this.setStyleBasedOnStatus();
  }

  /**
   * Sets the background color based on the provided status.
   */
  private setStyleBasedOnStatus() {
    let backgroundColor = '';
    switch (this.status?.toLowerCase()) {
      case 'draft':
        backgroundColor = 'lightgreen';
        break;
      case 'ready':
        backgroundColor = 'lightblue';
        break;
      case 'paid':
        backgroundColor = 'lightgray';
        break;
      case 'running':
        backgroundColor = 'yellow';
        break;
      case 'complete':
        backgroundColor = 'violet';
        break;
      default:
        backgroundColor = 'white';
    }

    this.renderer.setStyle(this.el.nativeElement, 'background-color', backgroundColor);
  }

}
