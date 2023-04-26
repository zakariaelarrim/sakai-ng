import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-servir-collecteur',
  templateUrl: './question-servir-collecteur.component.html',
  styleUrls: ['./question-servir-collecteur.component.scss']
})
export class QuestionServirCollecteurComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    onSelectNot(){
        this.router.navigateByUrl('');
    }
    onSelectYes(){
      this.router.navigateByUrl('question-alimentation-gravitaire');
    }
}
