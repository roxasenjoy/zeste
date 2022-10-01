import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LaTeteEtLesMainsComponent } from './la-tete-et-les-mains/la-tete-et-les-mains.component';
import { PrestationsComponent } from './prestations/prestations.component';


const routes: Routes = [
  { path: '', component: HomeComponent}, // Permet la connexion / Inscription de l'utilisateur
  { path: 'prestations', component: PrestationsComponent}, // Permet la connexion / Inscription de l'utilisateur
  { path: 'la-tete-et-les-mains', component: LaTeteEtLesMainsComponent}, // Permet la connexion / Inscription de l'utilisateur
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
