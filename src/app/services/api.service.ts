import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL ='https://6229de55be12fc4538aa6c8e.mockapi.io/task';

 public allTasks$ = new BehaviorSubject<Task[]>([]);
  constructor(private http: HttpClient) { 
    this.getAllTasks();
  }

  taskArray: Task[] = [];
  // new Task(task.id,task.name,task.priority,task.creationDate,task.doneDate)
  
  getAllTasks():void{
    this.http.get<any[]>(this.API_URL).pipe(
      map(taskObjArray => taskObjArray.map(taskObj=>this.parseTask(taskObj)))
    ).subscribe(task=> this.allTasks$.next(task))
  }

  getActiveTasks(): Observable<Task[]>{
    return this.allTasks$.pipe(
      map(alltask=> alltask.filter(t=>!t.doneDate))
    )
  }

  getDoneTasks(): Observable<Task[]>{
    return this.allTasks$.pipe(
      map(alltask=> alltask.filter(t=>t.doneDate))
    )
  }
  getSingleTask(taskId: string): Observable<Task | undefined > {
    
    return this.allTasks$.pipe(
      map(alltask=> alltask.find(t=>t.id===taskId))
    );
    }

    createTask(task:Task):Observable<boolean>{
      const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
      return this.http.post<Task>(this.API_URL, task, httpOptions).pipe(
        map(task=>{
          this.getAllTasks();
          return true;
        }),
        catchError(error =>of(false))
      );
    }

    deleteTask(taskId:string):Observable<boolean>{
      const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
      return this.http.delete<Task>(this.API_URL + '/' + taskId,httpOptions).pipe(
        map(Response=>{
          this.getAllTasks();
          return true;
        }),
        catchError(error =>of(false))
      );
    }

    taskDone(task:Task):Observable<boolean>{
      const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
      task.doneDate=new Date();
      return this.http.put<Task>(this.API_URL + '/' + task.id,httpOptions).pipe(
        map(task =>{
          this.getAllTasks();
          return true;
        }),
        catchError(error =>of(false))
      );
    }
  // getActiveTask(): Observable<Task[]>{
  //   return this.http.get<Task[]>(this.API_URL).pipe(
  //     map((tasks:any[])=>tasks.filter(task=> !task.doneDate).map(task=> task = new Task(task.id,task.name,task.priority,task.creationDate,task.doneDate))
  //     ));

  // }

  // getDoneTask(): Observable<Task[]>{

  //   return this.http.get<Task[]>(this.API_URL).pipe(
  //     map((tasks:any[])=>tasks.filter(task=> task.doneDate).map(task=> task = new Task(task.id,task.name,task.priority,task.creationDate,task.doneDate))
  //     ));

  // }
  parseTask(obj: any): Task {
    const task = new Task(obj.id, obj.name, obj.priority, obj.creationDate);
    if (obj.doneDate) {
      task.doneDate = new Date(obj.doneDate);
    }
    return task;
  }
}
