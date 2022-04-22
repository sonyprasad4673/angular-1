import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  students =[
    {id: 101, name: "Durga", description: "Durga Details", email: "durga@xyz.com"},
    {id: 201, name: "charan", description: "Charam Details", email: "charan@xyz.com"},
    {id: 301, name: "prudhvi", description: "Prudhvi Details", email: "prudhvi@xyz.com"},
    {id: 401, name: "Rana", description: "Rana Details", email: "Rana@xyz.com"},

  ]

  constructor() { }
  
  public getStudents(): Array<{id: any, name: any, description: any, email: any}>{
    return this.students;}

  public createStudents(students: {id: any, name: any, description: any, email: any}){
    this.students.push(students);
  }
  }

