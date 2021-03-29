import { Component, OnInit } from '@angular/core';

export interface Plant {
    name: string;
    category: string;
    outdoorDesc: string;
    outdoorStart: Date;
    outdoorEnd: Date;
    indoorDesc: string;
    indoorStart: Date;
    indoorEnd: Date;
    recommendation: string;
}

@Component({
  selector: 'app-sortable-table',
  templateUrl: './sortable-table.component.html',
  styleUrls: ['./sortable-table.component.css']
})

export class SortableTableComponent implements OnInit {
  clickCount: number = 0;
  tableData: Plant[];

  constructor() { }

  ngOnInit(): void {
    this.tableData = [{
        name: "Basil",
        category: "Herb",
        outdoorDesc: "1-2 weeks after last frost",
        outdoorStart: new Date(4-30),
        outdoorEnd: new Date(5-7),
        indoorDesc: "4-6 weeks before last frost",
        indoorStart: new Date(3-12),
        indoorEnd: new Date(3-26),
        recommendation: "Indoors"
    },{
        name: "Bell Peppers",
        category: "Vegetable",
        outdoorDesc: "2-4 weeks after last frost",
        outdoorStart: new Date(5-7),
        outdoorEnd: new Date(5-21),
        indoorDesc: "6-8 weeks before last frost",
        indoorStart: new Date(2-26),
        indoorEnd: new Date(3-12),
        recommendation: "Indoors"
    },{
        name: "Carrots",
        category: "Vegetable",
        outdoorDesc: "2-4 weeks before last frost",
        outdoorStart: new Date(3-26),
        outdoorEnd: new Date(4-9),
        indoorDesc: "not recommended",
        indoorStart: new Date(),
        indoorEnd: new Date(),
        recommendation: "Outdoors"
    },{
        name: "Marigolds",
        category: "Flower",
        outdoorDesc: "1-2 weeks after last frost",
        outdoorStart: new Date(4-30),
        outdoorEnd: new Date(5-7),
        indoorDesc: "4-6 weeks before last frost",
        indoorStart: new Date(3-12),
        indoorEnd: new Date(3-26),
        recommendation: "Indoors"
    },{
        name: "Purple Coneflowers",
        category: "Flower",
        outdoorDesc: "2-4 weeks before last frost",
        outdoorStart: new Date(3-26),
        outdoorEnd: new Date(4-9),
        indoorDesc: "10-12 weeks before last frost",
        indoorStart: new Date(2-12),
        indoorEnd: new Date(2-26),
        recommendation: "Outdoors"
    },{
        name: "Spinach",
        category: "Vegetable",
        outdoorDesc: "4-6 weeks before last frost",
        outdoorStart: new Date(3-12),
        outdoorEnd: new Date(3-26),
        indoorDesc: "not recommended",
        indoorStart: new Date(),
        indoorEnd: new Date(),
        recommendation: "Outdoors"
    },{
        name: "Zinnias",
        category: "Flower",
        outdoorDesc: "1-2 weeks after last frost",
        outdoorStart: new Date(4-30),
        outdoorEnd: new Date(5-7),
        indoorDesc: "4-6 weeks before last frost",
        indoorStart: new Date(3-12),
        indoorEnd: new Date(3-26),
        recommendation: "Outdoors"
    }];
  }

  increaseCount = (): void => {
    this.clickCount++;
  }
}
