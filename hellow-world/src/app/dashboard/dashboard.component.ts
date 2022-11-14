import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})


export class DashboardComponent implements OnInit {
  user = JSON.parse(localStorage.getItem("angular") || '').username
  
  
  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem("angular")
    location.reload();

   
  }

}
