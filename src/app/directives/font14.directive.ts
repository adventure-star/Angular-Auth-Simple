import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFont14]'
})
export class Font14Directive {

  constructor(el: ElementRef) {
    el.nativeElement.style.fontSize = '14px';
  }

}
