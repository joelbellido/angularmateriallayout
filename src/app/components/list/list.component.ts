import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public folders:any[];
  public notes:any[];
  constructor() { }

  ngOnInit() {
    this.folders=[
    {name:'Carpeta 1',updated:"actualizada a las 20:00"}, 
    {name:'Carpeta 2',updated:"se actualizará a las 21:00"}
    ];

    this.notes=[
      {name:'Nota 1',updated:"actualizada a las 20:00"}, 
      {name:'Nota 2',updated:"se actualizará a las 21:00"}
      ];
  }

}
