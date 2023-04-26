import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-alimentation-gravitaire',
  templateUrl: './question-alimentation-gravitaire.component.html',
  styleUrls: ['./question-alimentation-gravitaire.component.scss']
})
export class QuestionAlimentationGravitaireComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    onSelectGravitaire(){
      this.router.navigateByUrl('gravitaire');
    }

    onSelectPompage(){
        this.router.navigateByUrl('pompage');
    }
}
