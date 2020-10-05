import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { DataService } from '../data.service';
import { PokeApiService } from '../poke-api-service.service';
import { PokeDetail } from '../pokemon';

@Component({
  selector: 'poke-detail',
  providers: [PokeApiService],
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  @Input() // Not for Q15-16
  pokeDetail: PokeDetail;

  currentImg: string;
  currentImgIsFront: boolean;

  /**
   * This array contains all the subscriptions to not forget to unsubscribe to all when the component is destroyed
   */
  subscriptions = [];

  constructor(private dataService: DataService) {
    this.subscriptions.push(
      this.dataService.getObservable().subscribe(e => {
        console.log(e);
      })
    );
  }

  ngOnInit(): void {
    const secondsCounter = interval(2000);
    this.subscriptions.push(
      secondsCounter.subscribe(n => this.changeImg())
    );


    this.currentImg = this.pokeDetail.sprites.front_default;
    this.currentImgIsFront = true;
  }

  ngOnDestroy() {
    if (this.subscriptions.length > 10) console.log("WARNING : Too many subscriptions");
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe()
    }
  }

  /**
   * Little animation changing the pokemon from back to front en the other way around
   */
  changeImg() {
    if (this.currentImgIsFront) {
      this.currentImg = this.pokeDetail.sprites.back_default;
      this.currentImgIsFront = false;
    } else {
      this.currentImg = this.pokeDetail.sprites.front_default;
      this.currentImgIsFront = true;
    }
  }


}
