import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomBackgroundColor]'
})
export class CustomBackgroundColorDirective {

  @Input('appCustomBackgroundColor') status!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    this.setStyleBasedOnStatus();
  }

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
