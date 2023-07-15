import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import baseUrl from './../baseURl/baseUrl'



@Injectable()
export class Userservice {
    
    constructor(private http:HttpClient){
        
    }
    /*novo user*/
    Caduser(user:any): Observable<User>{
      return  this.http.post<User>(`${baseUrl}/users`, user)
    }

  async  getAllUsers(): Promise<User[]>{
      const data  = await fetch(`${baseUrl}/users`);
      return await data.json()
    }
  
    deleteUser(id:number): Observable<User>{
     return this.http.delete<User>(`${baseUrl}/users/${id}`)
    }
}
