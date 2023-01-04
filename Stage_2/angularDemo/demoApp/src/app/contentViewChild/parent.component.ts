import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  @ContentChild("header") cardContentHeader!: ElementRef;
  @ViewChild("header") cardViewHeader!: ElementRef;

  @ContentChild("main") mainContentData!: ElementRef;
  @ViewChild("main") mainViewData!: ElementRef;

  @ContentChild("footer") footerContentData!: ElementRef;
  @ViewChild("footer") footerViewData!: ElementRef;


}
