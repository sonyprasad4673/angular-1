import { Component, OnInit } from '@angular/core';
import {Name} from '../home';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  myname: Name={
    name: 'Edureka'
  }

  constructor(private homeService:HomeServiceService) { }

  ngOnInit(): void {
  }

}
