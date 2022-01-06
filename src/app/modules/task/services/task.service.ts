import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private URL = environment.api;
  constructor(private httpClient:HttpClient) { }

  getTask():Observable<any>{
    return this.httpClient.get(
      `${this.URL}/task`
    ).pipe(
      catchError(() => {
        console.log('Algo ocurrio?? fijate')
        return of([])
      })
    )
  }
}
