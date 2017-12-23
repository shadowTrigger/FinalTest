import { Component, OnInit } from '@angular/core';
import { Tache } from '../../../model/tache';

@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.css']
})
export class ListTacheComponent implements OnInit {

public taches: Tache[String name, String description, Occurences occurences[]] = [
  new Tache('verification','verif serveurs', ['premiere', 'deuxieme', 'troisieme']),

];

  constructor() { }

  ngOnInit() {
  }

}
