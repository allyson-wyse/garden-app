import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortable-table',
  templateUrl: './sortable-table.component.html',
  styleUrls: ['./sortable-table.component.css']
})
export class SortableTableComponent implements OnInit {
  clickCount: number = 0;
  tableData: any[];

  constructor() { }

  ngOnInit(): void {
    this.tableData = [{
        "name": "Basil",
        "category": "Herb",
        "outdoorDesc": "1-2 weeks after last frost",
        "outdoorStart": "04/30",
        "outdoorEnd": "05/07",
        "indoorDesc": "4-6 weeks before last frost",
        "indoorStart": "03/12",
        "indoorEnd": "03/26",
        "recommendation": "Indoors"
    },{
        "name": "Bell Peppers",
        "category": "Vegetable",
        "outdoorDesc": "2-4 weeks after last frost",
        "outdoorStart": "05/07",
        "outdoorEnd": "05/21",
        "indoorDesc": "6-8 weeks before last frost",
        "indoorStart": "02/26",
        "indoorEnd": "03/12",
        "recommendation": "Indoors"
    },{
        "name": "Carrots",
        "category": "Vegetable",
        "outdoorDesc": "2-4 weeks before last frost",
        "outdoorStart": "03/26",
        "outdoorEnd": "04/09",
        "indoorDesc": "not recommended",
        "indoorStart": "",
        "indoorEnd": "",
        "recommendation": "Outdoors"
    },{
        "name": "Marigolds",
        "category": "Flower",
        "outdoorDesc": "1-2 weeks after last frost",
        "outdoorStart": "04/30",
        "outdoorEnd": "05/07",
        "indoorDesc": "4-6 weeks before last frost",
        "indoorStart": "03/12",
        "indoorEnd": "03/26",
        "recommendation": "Indoors"
    },{
        "name": "Purple Coneflowers",
        "category": "Flower",
        "outdoorDesc": "2-4 weeks before last frost",
        "outdoorStart": "03/26",
        "outdoorEnd": "04/09",
        "indoorDesc": "10-12 weeks before last frost",
        "indoorStart": "02/12",
        "indoorEnd": "02/26",
        "recommendation": "Outdoors"
    },{
        "name": "Spinach",
        "category": "Vegetable",
        "outdoorDesc": "4-6 weeks before last frost",
        "outdoorStart": "03/12",
        "outdoorEnd": "03/26",
        "indoorDesc": "not recommended",
        "indoorStart": "",
        "indoorEnd": "",
        "recommendation": "Outdoors"
    },{
        "name": "Zinnias",
        "category": "Flower",
        "outdoorDesc": "1-2 weeks after last frost",
        "outdoorStart": "04/30",
        "outdoorEnd": "05/07",
        "indoorDesc": "4-6 weeks before last frost",
        "indoorStart": "03/12",
        "indoorEnd": "03/26",
        "recommendation": "Outdoors"
    }];
  }

  increaseCount = (): void => {
    this.clickCount++;
  }
}