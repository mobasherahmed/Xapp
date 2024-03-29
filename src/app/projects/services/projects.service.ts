import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects:BehaviorSubject<any>=new BehaviorSubject([])
  constructor(private http:HttpClient) { }

  manageProject(project):Observable<any>{
    return this.http.post('manageProjects',project).pipe(take(1))
  }
  getProjects():Observable<any>{
    return this.http.get('getAllProjects').pipe(take(1))
  }
  deleteProject(id,type):Observable<any>{
    return this.http.delete(`deleteProject/${type}/${id}`).pipe(take(1))
  }
  addProject(project):Observable<any>{
    return this.http.post('createProject',project).pipe(take(1))
  }
  updateProject(id,project):Observable<any>{
    return this.http.post('createProject',project).pipe(take(1))
  }
}
