import { Component, OnInit } from '@angular/core';
import {faListAlt} from '@fortawesome/free-solid-svg-icons'
import { TarefaService } from 'src/app/services/Tarefa.service';
@Component({
  selector: 'app-cardlista',
  templateUrl: './cardlista.component.html',
  styleUrls: ['./cardlista.component.css']
})
export class CardlistaComponent implements OnInit {
  faListAlt=faListAlt
  count:any 
  constructor(private tarefaservice:TarefaService) { }

  ngOnInit(): void {
  this.countTarefas()
  
  }

  countTarefas(){
    const id = Number(localStorage.getItem('id'))
    this.tarefaservice.countTotaltarefas(id)
    .subscribe(count => this.count = count)
     
  }

}
