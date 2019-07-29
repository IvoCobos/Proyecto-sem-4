import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router'
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import { LuceroysushowComponent } from './luceroysushow/luceroysushow.component';
import { RepertorioComponent } from './repertorio/repertorio.component';
import { VideosComponent } from './videos/videos.component';
import { MasartistasComponent } from './masartistas/masartistas.component';
import { MasserviciosComponent } from './masservicios/masservicios.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


const routes: Routes = [
{ path:'', redirectTo: '/inicio', pathMatch: 'full'},
{ path:'inicio', component: InicioComponent},
{ path:'luceroysushow', component: LuceroysushowComponent},
{ path:'repertorio', component: RepertorioComponent},
{ path:'videos', component: VideosComponent},
{ path:'masartistas', component: MasartistasComponent},
{ path:'masservicios', component: MasserviciosComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    LuceroysushowComponent,
    RepertorioComponent,
    VideosComponent,
    MasartistasComponent,
    MasserviciosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
