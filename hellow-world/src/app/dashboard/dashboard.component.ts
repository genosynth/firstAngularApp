import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import jwt_decode from "jwt-decode"
import { ListUsersComponent } from '../list-users/list-users.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],


})


export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  user:any = JSON.parse(localStorage.getItem("angular") || '')
  decoded:any = jwt_decode(this.user)
  username = this.decoded.username

  
  
  ngOnInit(): void {    
   


  }
 

  logOut(){
    localStorage.removeItem("angular")
    location.reload();
   
  }

  deleteAccount(){
   
    if(window.confirm("Are you sure you want to delete account?")){
      this.http.post('http://localhost:3070/api/delete',{username:this.username})
    .subscribe((res)=>{
      console.log(res)   
      window.alert(res)  
      this.logOut()

    })
    }
    

  }

}
