import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList:any=[];
  selectedEmployeeRadioButtonValue:string="All";
  constructor() { 
    this.employeeList=[
      {id:1, name:"Pyarel", dateOfBirth:"03/05/1998", gender:"Female"},
      {id:2, name:"Pearl", dateOfBirth:"04/05/1998", gender:"Female"},
      {id:3, name:"Sharon", dateOfBirth:"05/05/1998", gender:"Male"},
      {id:4, name:"Priya", dateOfBirth:"06/05/1998", gender:"Female"},
    ]
  }

  getTotalEmployees(){
    return this.employeeList.length;
  }

  getTotalMaleEmployees(){
    return this.employeeList.filter((e: { gender: string; })=>e.gender==="Male").length;
  }
  getTotalFemaleEmployees(){
    return this.employeeList.filter((e: { gender: string; })=>e.gender==="Female").length;
  }

  onRadioButtonClicked(selectedButtonValue:string){
    this.selectedEmployeeRadioButtonValue=selectedButtonValue;
  }

  ngOnInit(): void {
  }

}
