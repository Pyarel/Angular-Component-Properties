import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
  selectedRadioButtonValue:string="All";

  @Output()
  countRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();


  @Input()
  all:any;

  @Input()
  male:any;

  @Input()
  female:any;

  constructor() { }

  ngOnInit(): void {
  }

  onRadioButtonChange(){
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }
}
