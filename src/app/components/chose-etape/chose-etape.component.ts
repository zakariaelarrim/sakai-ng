import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-chose-etape',
  templateUrl: './chose-etape.component.html',
  styleUrls: ['./chose-etape.component.scss']
})
export class ChoseEtapeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
    goToMinimumDonnees(){
      this.router.navigateByUrl('minimum-donnees')
    }
}
