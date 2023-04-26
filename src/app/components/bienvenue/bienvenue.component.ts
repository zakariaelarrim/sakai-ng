import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.scss']
})
export class BienvenueComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
    onSubmit(){
      this.router.navigateByUrl('chose-etape')
    }
}
