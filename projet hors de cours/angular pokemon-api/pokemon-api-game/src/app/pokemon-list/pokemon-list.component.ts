import { get } from 'http';
import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  page = 1;
  totalPokemons: number = 1078;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemons();

  }
  getPokemons() {
  this.dataService.getPokemons(9, (this.page-1)*10)
  .subscribe((response: any) => {
    this.totalPokemons = response.count;

    response.results.forEach((result:any) => {
      this.dataService.getMoreData(result.name)
      .subscribe((uniqResponse:any)=>{
        this.pokemons.push(uniqResponse);
        console.log(this.pokemons);

      })
    });
  }
)


console.log("fuck you");


  }



  typeColors: { [key: string]: string } = {
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    ground: '#E0C068',
    rock: '#B8A038',
    psychic: '#F85888',
    ice: '#98D8D8',
    dark: '#705848',
    fairy: '#EE99AC',
    fighting: '#C03028',
    poison: '#A040A0',
    flying: '#A890F0',
    bug: '#A8B820',
    ghost: '#705898',
    steel: '#B8B8D0',
    dragon: '#7038F8',
    normal: '#A8A878'
  };
  getTypeColor(type: string): string {
    return this.typeColors[type] || '#000'; // Default to black if type not found
  }

  playCry(audioElement: HTMLAudioElement): void {
    audioElement.play();
  }

}
