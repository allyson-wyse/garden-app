import { Component, OnInit } from '@angular/core';
import SeedData from '../../assets/seed-data.json';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class CalendarListComponent implements OnInit {
    displayedColumns: string[] = ['name', 'recommendation', 'outdoorDates', 'indoorDates'];
    tableData: any[];

    constructor() { }

    ngOnInit(): void {
        this.tableData = SeedData['plants'];
    }

}
