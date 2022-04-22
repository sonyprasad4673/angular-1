import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.sass']
})
export class StudentListComponent implements OnInit {
  student: any;
  selectedStudent: any;

  constructor(public homeService: HomeServiceService) { }

  ngOnInit(): void {
  }
  public selectStudent(student: (student: any) => void){
    this.selectStudent = student;
  }

}
