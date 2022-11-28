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
    if(localStorage.getItem("angular")){ this.router.navigate(['/dashboard'])}
  }




  login(logInForm:NgForm){
    const user = logInForm.value
    user.logged = true
    console.log(user)
    this.http.post('http://localhost:3070/login', user)
    .subscribe((res)=>{
      console.log(res)      
     
      if (res!="Incorrect Credentials"){

        console.log(res)
       
        localStorage.setItem("angular", JSON.stringify(res))
        //location.reload()
        this.router.navigate(['/dashboard'])
       
      } else {window.alert(res) }
      

    })
    
    logInForm.reset()

  }
}
