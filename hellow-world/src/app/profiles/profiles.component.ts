import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],


})
export class ProfilesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  users:any = []

  trackByFunc = (index: number, value: string) => index;

  ngOnInit(): void {
    this.http.get('http://localhost:3070/api/users')
    .subscribe((res)=>{
      console.log(res)   
      this.users=res
           

    })
  }
}
