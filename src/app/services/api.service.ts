import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL =
  'https://6229de55be12fc4538aa6c8e.mockapi.io/task';


  constructor(private http: HttpClient) { }

  taskArray: Task[] = [];
  // new Task(task.id,task.name,task.priority,task.creationDate,task.doneDate)
  
  getActiveTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.API_URL).pipe(
      map((tasks:any[])=>tasks.filter(task=> !task.doneDate).map(task=> task = new Task(task.id,task.name,task.priority,task.creationDate,task.doneDate))
      ));

  }

  getDoneTask(): Observable<Task[]>{

    return this.http.get<Task[]>(this.API_URL).pipe(
      map((tasks:any[])=>tasks.filter(task=> task.doneDate).map(task=> task = new Task(task.id,task.name,task.priority,task.creationDate,task.doneDate))
      ));

  }
}
