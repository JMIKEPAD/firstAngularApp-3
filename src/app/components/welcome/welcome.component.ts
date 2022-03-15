import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
tasks:Task[]=[];
  constructor(private taskService : ApiService) { }

  ngOnInit(): void {
    // this.taskService.getAllTask().subscribe({next: data => this.tasks = data, error: err => console.log(err)})
    // console.log(this.tasks);
    
  }

}
