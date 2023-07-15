import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserLock, faKey, faUserCircle, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import { AlertInterface } from 'src/app/models/AlertInterface';
import { AlertService } from 'src/app/services/Alert.service';
import { User } from '../../models/User';
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

   nome:string = ''
   sobrenome:string = '' 
   email:string = '' 
   password:string = '' 
   reset:string = '' 

  constructor( private userService: Userservice ,private alertService:AlertService) {}

 async ngOnInit(): Promise<any> {

  }

  OnSubmit(f: NgForm) {
    const nome = f.value.nome
    const sobrenome = f.value.sobrenome
    const email = f.value.email
    const password = f.value.password
    const reset = f.value.reset

    let user = new User(nome, sobrenome, email, password);
    if(reset != password){
      this.alerts = this.alertService.alertCardUser('A senha deve ser igual')
    }else{
      this.userService.Caduser(user)
      .subscribe(
        (res:any) => {
            this.clearFormInputs();
            this.userService.getAllUsers();
        },
        err => {
          for (let index = 0; index < err.error.list.length; index++) {
            const element = err.error.list[index];
           this.alerts = this.alertService.alertCardUser(element.msg)
          }
          
        }

      )
    }
    
  
  }

  close(alert:AlertInterface){
    this.alerts = []
    this.alertService.closeAlert(alert)
  }

  clearFormInputs(){
    this.nome = ''
    this.sobrenome = '' 
    this.email = '' 
    this.password = '' 
    this.reset = '' 
  }

}


