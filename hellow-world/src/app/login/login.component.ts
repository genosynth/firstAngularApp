import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login(logInForm:NgForm){
    const user = logInForm.value
    user.logged = true
    //console.log(user)
    this.http.post('http://localhost:3070/api/login', user)
    .subscribe((res)=>{
      console.log(res)
      window.alert(res)
      if (res!="Incorrect Credentials"){
        localStorage.setItem("angular", JSON.stringify(user))
        this.router.navigate(['/dashboard'])
      }
      

    })
    
    logInForm.reset()

  }
}
