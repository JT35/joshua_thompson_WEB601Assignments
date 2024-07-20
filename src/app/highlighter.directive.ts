import {Directive, ElementRef, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
  standalone: true
})
export class HighlighterDirective implements OnInit {

  @Input() colour?: string;
  @Input() textColour?: string;

  constructor(private elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = 'white';
    elem.nativeElement.style.color = 'black';
  }

  ngOnInit() {
    this.elem.nativeElement.style.backgroundColor = this.colour || 'white';
    this.elem.nativeElement.style.color = this.textColour || 'black';
  }

}
