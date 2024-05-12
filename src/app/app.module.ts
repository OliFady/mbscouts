import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { BodyOneComponent } from './components/body-one/body-one.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TeamsLandingComponent } from './components/teams/teams-landing/teams-landing.component';
import { KashafeenComponent } from './components/teams/kashafeen/kashafeen.component';
import { MorshedatComponent } from './components/teams/morshedat/morshedat.component';
import { AshbalComponent } from './components/teams/ashbal/ashbal.component';
import { ZahratComponent } from './components/teams/zahrat/zahrat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    BodyOneComponent,
    JoinUsComponent,
    FooterComponent,
    ArchiveComponent,
    TeamsLandingComponent,
    KashafeenComponent,
    MorshedatComponent,
    AshbalComponent,
    ZahratComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
