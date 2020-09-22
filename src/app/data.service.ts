import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    console.log("Creating data service")
  }

  public pokemonId = new Subject<string>();

  getObservable(): Subject<string>{
    return this.pokemonId;
  }

  changePokemonId(pokeId: string) {
    this.pokemonId.next(pokeId);
  }

}
