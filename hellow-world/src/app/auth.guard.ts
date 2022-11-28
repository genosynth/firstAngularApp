import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,Route, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//import jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     
   
      // provides the route configuration options.
      const { routeConfig } = route; 
      
      // provides the path of the route.
      const { path } = routeConfig as Route; 

      let token:any = localStorage.getItem("angular") 
      //let decoded:any = JSON.stringify(jwt_decode(token)) || null
       
      if (path?.includes('dashboard') && token) {
     
   
        return true;
      }

      if (path?.includes('profiles') && token) {
        
     
          return true;
        }
     
      // for any other condition, navigate to the forbidden route.

     this.router.navigateByUrl('/login');    
     
      return false;


     
  }

  
  
}
