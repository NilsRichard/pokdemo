import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PokeDetail, PokeServiceRes } from './pokemon';
import { Observable } from 'rxjs';

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokeServiceRes> {
    return this.http.get<PokeServiceRes>(url);
  }

  getPokemonInfo(id: number): Observable<PokeDetail> {
    return this.http.get<PokeDetail>(url + (id+1));
  }

  getPokemonInfoIdString(id: string): Observable<PokeDetail> {
    return this.http.get<PokeDetail>(url + id);
  }

}
