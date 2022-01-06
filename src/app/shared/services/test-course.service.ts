import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestCourseService {

  public dataTest:string = 'Hola mundo'

  constructor() { }

  setData(msg:string):void{
      this.dataTest = msg;
  }
}
