import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public tasks:BehaviorSubject<any> = new BehaviorSubject([]);
  constructor(private http:HttpClient) { }

  getAllTasks():Observable<any>{
    return this.http.get('getAllTasks').pipe(take(1))
  }
  deleteTask(id):Observable<any>{
    return this.http.delete('deleteTask/'+id).pipe(take(1))
  }
  manageTasks(tasks):Observable<any>{
    return this.http.post('manageTasks',tasks).pipe(take(1))
  }
  getProjects():Observable<any>{
    return this.http.get('getAllProjects').pipe(take(1))
  }
  getcategories():Observable<any>{
    return this.http.get('getAllCategories').pipe(take(1))
  }
  getTaskTypes(id):Observable<any>{
    return this.http.get(`getLookupDetailBasedMaster/${id}`).pipe(take(1))
  }
  getCurrencies(id):Observable<any>{
    return this.http.get(`getLookupDetailBasedMaster/${id}`).pipe(take(1))
  }
  getSurvey():Observable<any>{
    return this.http.get('getAllSurvies').pipe(take(1))
  }
  getUploadedTasks():Observable<any>{
    return this.http.get('getUploadedTasks').pipe(take(1))
  }
  changeUploadedTaskStatus(body,status):Observable<any>{
    return this.http.put('changeUploadedTaskStatus/'+status,body).pipe(take(1))
  }

  
}
