import { Component } from '@angular/core';
import jwt_decode from "jwt-decode"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Log In/Register Page';  
  token:any = localStorage.getItem("angular") || "none"
  //decoded:any = jwt_decode(this.token)  || ""
  loggedStatus =  this.getStatus(this.token)

  getStatus(token: any): any {
    return token !=="none"  ? 'Logged in' : 'Not Logged in';
 }
    
 }
