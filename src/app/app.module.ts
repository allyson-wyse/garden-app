import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { FooterComponent } from './footer/footer.component';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { SortableTableComponent } from './sortable-table/sortable-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarListComponent,
    FooterComponent,
    SortableTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
