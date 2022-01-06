import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(){

    const element = this.elHost.nativeElement;
    element.src = 'https://m.media-amazon.com/images/I/61FQCSP7ZIL._SS500_.jpg'

    console.log('Algo sucedio 🤔');
  }

  constructor(private elHost:ElementRef) { }

}
