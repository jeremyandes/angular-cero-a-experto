import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroesRoutingModule } from './heroes-routing.module';
import { NgModule } from '@angular/core';

import { AddComponent } from './pages/add/add.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../shared/material/material.module';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroeComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule,
  ]
})
export class HeroesModule { }
