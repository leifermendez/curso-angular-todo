import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { TestCourseService } from '@shared/services/test-course.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class CardComponent  {
  @ViewChild('refId') elementRefId:ElementRef = new ElementRef('hola')
  @Input() idOrder: string | number = 0
  @Input() items: Array<any> = []

  constructor(
    private testCourseService:TestCourseService
    ) { }


  sendData():void{
    this.testCourseService.setData('Hola desde card 😉')
  }
  
}
