import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-svg',
  styleUrls: ['./icon-svg.component.scss'],
  template: `
    <svg [ngStyle]="appliedStyle" class="iconStyle">
      <use attr.xlink:href="assets/symbol-defs.svg#{{icon}}"></use>
    </svg>`
})
export class IconSvgComponent implements OnInit {
  @Input() icon: string;
  @Input() appliedStyle: string;
  constructor() { }

  ngOnInit() {
  }

}
