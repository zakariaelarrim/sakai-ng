import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-minimum-donnees',
  templateUrl: './minimum-donnees.component.html',
  styleUrls: ['./minimum-donnees.component.scss']
})
export class MinimumDonneesComponent implements OnInit {
    DCO:number = 0;
    DBO5: number = 0;
    MES: number = 0;
    NTK: number = 0;
    QDebit: number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
    onSubmit(){
      this.router.navigateByUrl('question-servir-colllecteur')
    }
}
