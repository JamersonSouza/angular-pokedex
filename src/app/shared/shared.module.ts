import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPokeComponent } from './header-poke/header-poke.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    HeaderPokeComponent,
    SearchComponent,
    ListComponent,
  ],
  exports: [HeaderPokeComponent, SearchComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
