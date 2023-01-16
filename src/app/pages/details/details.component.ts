import { PokeapiService } from './../../service/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private urlPoke: string = 'https://pokeapi.co/api/v2/pokemon';

  private urlNome: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemonV2: any;

  public isLoading: boolean = false;

  public apiError:  boolean = false;

  constructor(private activedRoute : ActivatedRoute, private pokeApi : PokeapiService) { }

  ngOnInit(): void {
    this.pokemon;
  }

  public get pokemon(){

    const idpokemon = this.activedRoute.snapshot.params['id'];
    const pokemon = this.pokeApi.apiGetPokemon(`${this.urlPoke}/${idpokemon}`);
    const nomePoke = this.pokeApi.apiGetPokemon(`${this.urlNome}/${idpokemon}`);

    return forkJoin([pokemon, nomePoke]).subscribe(res => {
      this.pokemonV2 = res;
      this.isLoading = true;
    }, error => {
      this.apiError = true;
    })


  }

}
