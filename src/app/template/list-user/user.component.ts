import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Userservice } from 'src/app/services/User.service';


 @Component({
    selector: 'list-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class ListUserComponent implements OnInit{
    listusers: User[] = []
    constructor( private userService: Userservice) {}

      ngOnInit(): void{
      this.listUsers()
     }


    async listUsers():Promise<User[]>{
        try {
            const data = await this.userService.getAllUsers();
            this.listusers = data;
            return data
        } catch (error:any) {
            return error;
        }
        
     }

      deleteUser(id:any){
        this.userService.deleteUser(id).subscribe()
        this.listUsers()
     }

}