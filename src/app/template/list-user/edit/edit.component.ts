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
    id: any = 0;
    listuser : any[] = []

    constructor(private route: ActivatedRoute,
        private userService: Userservice){}
    ngOnInit(): void {
       this.getUserId()
    }

   async getUserId():Promise<User[]>{
        let id = this.route.snapshot.paramMap.get('id');
        const data = await this.userService.getAllUser(id)
        this.listuser = [data]
        return data
    }

    OnSubmit(f:any){
    const nome = f.value.nome
    const sobrenome = f.value.sobrenome
    const email = f.value.email
    const password = f.value.password
    const reset = f.value.reset

    let user = new User(nome, sobrenome, email, password);
    let id = this.route.snapshot.paramMap.get('id') || 0;
    this.userService.updateUser(id, user).subscribe((res) => {
        window.location.href = '/'
    })
    
    }
}