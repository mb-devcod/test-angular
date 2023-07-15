import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { User } from "src/app/models/User";
import { Userservice } from "src/app/services/User.service";

@Component({
    selector: 'edit-user',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})

export class EditUserComponent implements OnInit{
    listuser : User[] = []
    constructor(private route: ActivatedRoute,
        private userService: Userservice){}
    ngOnInit(): void {
       this.getUserId()
    }

   async getUserId():Promise<User[]>{
        const id = this.route.snapshot.paramMap.get('id');
        const data = await this.userService.getAllUser(id)
        this.listuser = data
        return data
    }

    OnSubmit(f:any){
        
    }
}