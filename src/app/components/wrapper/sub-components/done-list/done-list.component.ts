import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  doneList: Task[] = [];

  constructor(private taskService : ApiService) {
    // let task1 = new Task("Studia Html", '10');
    // let task2 = new Task("Studia Angular", '10');
    // let task3 = new Task("Studia CSS", '10');
    // this.doneList = [task1, task2, task3];
  }
  ngOnInit(): void {
    this.taskService.getDoneTask().subscribe({next: data => this.doneList = data, error: err => console.log(err)})
  }

}
