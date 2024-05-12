import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { HeaderComponent } from './components/header/header.component';
import { AshbalComponent } from './components/teams/ashbal/ashbal.component';
import { KashafeenComponent } from './components/teams/kashafeen/kashafeen.component';
import { MorshedatComponent } from './components/teams/morshedat/morshedat.component';
import { TeamsLandingComponent } from './components/teams/teams-landing/teams-landing.component';
import { ZahratComponent } from './components/teams/zahrat/zahrat.component';

const routes: Routes = [ {
  path: '' ,
  component: HeaderComponent
},
{
  path:'archive',
  component:ArchiveComponent
},
{
  path:'team-landing',
  component:TeamsLandingComponent
},
{
  path:'kashafeen',
  component:KashafeenComponent
},
{
  path:'morshedat',
  component:MorshedatComponent
},
{
  path:'ashbal',
  component:AshbalComponent
},
{
  path:'zahrat',
  component:ZahratComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
