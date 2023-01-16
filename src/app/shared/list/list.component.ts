import { PokeapiService } from './../../service/pokeapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public getAllpokes: any;
  private setAllPokemons: any;

  public apiError: boolean = false;




  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
    this.pokeapiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllpokes = this.setAllPokemons;
      },
      error => {
        this.apiError = true;
      }
    );
  }


  setSearch(value: string):void{
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());

    });
    this.getAllpokes = filter;
  }

}
