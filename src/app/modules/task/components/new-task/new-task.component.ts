import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  newTask:FormGroup = new FormGroup({})
  constructor() { }

  ngOnInit(): void {
    this.newTask = new FormGroup(
      {
        order: new FormControl(''),
        item: new FormArray([
          new FormGroup(
            {
              key: new FormControl('Precio'),
              value: new FormControl('')
            }
          ),
          new FormGroup(
            {
              key: new FormControl('Observacion'),
              value: new FormControl('')
            }
          )
        ])
      }
    )
  }

  getItems():any{
    console.log(this.newTask.get('item'))
    const list =  this.newTask.get('item') as FormArray
    return list.controls
  }


  saveTask():void{
    console.log(this.newTask.value)
  }
}
