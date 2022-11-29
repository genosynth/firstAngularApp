import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  register(registrationForm:NgForm){
    const user = registrationForm.value
    console.log(user)
    this.http.post('http://localhost:3070/api/register', user)
    .subscribe((res)=>{
      console.log(res)
      window.alert(res)

    })
    
    registrationForm.reset()
    this.router.navigate(['/login'])

  }



}
