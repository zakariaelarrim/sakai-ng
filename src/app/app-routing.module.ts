import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AppMainComponent } from './app.main.component';

import { LoginComponent } from './components/login/login.component';
import {ChoseEtapeComponent} from "./components/chose-etape/chose-etape.component";
import {MinimumDonneesComponent} from "./components/minimum-donnees/minimum-donnees.component";
import {CalculDetailleComponent} from "./components/calcul-detaille/calcul-detaille.component";
import {
    QuestionServirCollecteurComponent
} from "./components/question-servir-collecteur/question-servir-collecteur.component";
import {
    QuestionAlimentationGravitaireComponent
} from "./components/question-alimentation-gravitaire/question-alimentation-gravitaire.component";
import {GravitaireComponent} from "./components/gravitaire/gravitaire.component";
import {PompageComponent} from "./components/pompage/pompage.component";
import {BienvenueComponent} from "./components/bienvenue/bienvenue.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardComponent},

                ],
            },
            {path:'pages/login', component: LoginComponent},
            {path:'bienvenue', component: BienvenueComponent},
            {path:'chose-etape', component: ChoseEtapeComponent},
            {path:'minimum-donnees', component: MinimumDonneesComponent},
            {path:'calcul-detaille', component: CalculDetailleComponent},
            {path:'question-servir-colllecteur', component: QuestionServirCollecteurComponent},
            {path:'question-alimentation-gravitaire', component: QuestionAlimentationGravitaireComponent},
            {path:'gravitaire', component: GravitaireComponent},
            {path:'pompage', component: PompageComponent},
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
