import { Component, OnInit } from '@angular/core';
import { ColumnType } from 'igniteui-angular';
import { Employee, employeesData } from './localData';
import { formatDate } from '@angular/common';
import { EmployeeDataService } from '../services/employee-data.service';

@Component({
  selector: 'app-newgrid',
  templateUrl: './newgrid.component.html',
  styleUrls: ['./newgrid.component.scss']
})
export class NewGridComponent implements OnInit {
  public localData: Employee[] = [];

  public EmployeeData: any = null;

  title = 'newGrid';

  constructor (
    private employeeDataService: EmployeeDataService
  ){}

  ngOnInit(): void {
    // this.localData = employeesData;
    this.employeeDataService.getEmployee().subscribe(data => this.EmployeeData = data);
  }

  public onColumnInit(column: ColumnType): void {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => formatDate(new Date(date), 'MM/dd/yyyy', 'en'));
    }
  }
}
