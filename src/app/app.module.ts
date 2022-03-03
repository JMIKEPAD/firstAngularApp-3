import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ToDoListComponent } from './components/wrapper/sub-components/to-do-list/to-do-list.component';
import { DoneListComponent } from './components/wrapper/sub-components/done-list/done-list.component';
import { TaskInputComponent } from './components/wrapper/sub-components/task-input/task-input.component';
import { FilterComponent } from './components/wrapper/sub-components/filter/filter.component';
import { StatisticsComponent } from './components/wrapper/sub-components/statistics/statistics.component';
import { TaskListComponent } from './components/wrapper/sub-components/task-list/task-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    ToDoListComponent,
    DoneListComponent,
    TaskInputComponent,
    FilterComponent,
    StatisticsComponent,
    TaskListComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
