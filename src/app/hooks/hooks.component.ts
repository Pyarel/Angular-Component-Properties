import { Component, Input, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges {
  @Input()
  simpleValue:any;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges){
    for(let property in changes){
      let change=changes[property]
      console.log("Current -" + change.currentValue)
      console.log("Previous - " + change.previousValue)
    }
  }
}
