import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PokeApiService } from '../poke-api-service.service';
import { PokeDetail, Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  providers: [PokeApiService],
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  displayAllQuestions = false;

  id: string = '';

  searchValue: string = '';
  selectedPokemon: Pokemon;
  listPokemon: Pokemon[] = [];

  pokeDetail: PokeDetail;

  constructor(private pokeService: PokeApiService, private dataService: DataService) { }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe(data => {
      data.results.forEach((e, index) => {
        this.listPokemon.push(new Pokemon(index, e.name, e.url));

      });
    })
  }

  /**
   * Gets the details on the selected pokemon 
   */
  go() {
    if (this.selectedPokemon != undefined && this.selectedPokemon.name != undefined) {
      this.pokeService.getPokemonInfo(this.selectedPokemon.id).subscribe(data => {
        this.pokeDetail = data;
        this.dataService.changePokemonId(this.selectedPokemon.id + '');
      });
    } else console.log("selected pokemon is undefined");
  }

}
