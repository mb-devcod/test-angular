import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserLock, faKey, faUserCircle, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import { AlertInterface } from 'src/app/models/AlertInterface';
import { Userservice } from '../../services/User.service';

@Component({
  selector: 'app-caduser',
  templateUrl: './caduser.component.html',
  styleUrls: ['./caduser.component.css']
})
export class CaduserComponent implements OnInit {
  faUserLock = faUserLock
  faKey = faKey
  faUserCircle = faUserCircle
  faMinusSquare = faMinusSquare
  alerts: AlertInterface[] = []

   nome:string = 'Mardonis'
   sobrenome:string = '' 
   email:string = '' 
   password:string = '' 
   reset:string = '' 

  constructor( private userService: Userservice) {}

  ngOnInit(): void {
  }

  OnSubmit(f: NgForm) {
    const nome = f.value.nome
    const sobrenome = f.value.sobrenome
    const email = f.value.email
    const password = f.value.password
    const reset = f.value.reset
    const typeuser = 'user'

  
  }



}


