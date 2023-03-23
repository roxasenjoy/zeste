import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LaTeteEtLesMainsComponent } from './la-tete-et-les-mains/la-tete-et-les-mains.component';
import { PrestationsComponent } from './prestations/prestations.component';
import { CgvComponent } from './cgv/cgv.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

const routes: Routes = [
  { path: '', component: HomeComponent}, // Permet la connexion / Inscription de l'utilisateur
  { path: 'prestations', component: PrestationsComponent}, // Permet la connexion / Inscription de l'utilisateur
  { path: 'lateteetlesmains', component: LaTeteEtLesMainsComponent}, // Permet la connexion / Inscription de l'utilisateur

  { path: 'cgv', component: CgvComponent}, // Permet la connexion / Inscription de l'utilisateur
  { path: 'mentionsLegales', component: MentionsLegalesComponent}, // Permet la connexion / Inscription de l'utilisateur
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
