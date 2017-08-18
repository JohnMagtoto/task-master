import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DateComponent } from './main/date/date.component';
import { ProgressComponent } from './main/progress/progress.component';
import { TaskListComponent } from './main/task-list/task-list.component';
import { TaskItemComponent } from './main/task-list/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DateComponent,
    ProgressComponent,
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
