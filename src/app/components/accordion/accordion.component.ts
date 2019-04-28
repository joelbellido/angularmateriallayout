import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('myaccordion') myPanels: MatAccordion;

  openAll(){
    console.info('Accordion multi: '+this.myPanels.multi);
    this.myPanels.openAll();
  }
  
  closeAll(){
    this.myPanels.closeAll() 
  }

}
