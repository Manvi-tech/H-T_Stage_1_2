import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chld',
  templateUrl: './chld.component.html',
  styleUrls: ['./chld.component.css']
})
export class ChldComponent implements AfterContentChecked, AfterContentInit{
  
  // content Child can point ngContent but ViewChild cant
  @ContentChild("head") headerContentData!: ElementRef;
  @ViewChild("head") headerViewData!: ElementRef;

  @ContentChild("main") mainContentData!: ElementRef;
  @ViewChild("main") mainViewData!: ElementRef;

  @ContentChild("footer") footerContentData!: ElementRef;
  @ViewChild("footer") footerViewData!: ElementRef;

  ngAfterContentInit(): void {
    console.log(this.headerContentData);
    console.log(this.headerViewData);
    //undefned bcoz ViewChild cant point ngcontent
  }

  ngAfterContentChecked(): void {
    console.log(this.footerContentData);
    console.log(this.footerViewData);
    //undefned bcoz ViewChild cant point ngcontent
    
  }

 
}
