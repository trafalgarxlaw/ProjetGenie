import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BoardGame } from '../interfaces/boardGame';
import { DetailledSearchService } from './detailled-search.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detailled-search',
  templateUrl: './detailled-search.component.html',
  styleUrls: ['./detailled-search.component.scss']
})
export class DetailledSearchComponent implements OnInit {

  boardGameList: Array<BoardGame>;

  detailledSearch = new FormGroup({
    minplayers: new FormControl(),
    maxplayers: new FormControl(),
    minplaytime: new FormControl(),
    maxplaytime: new FormControl(),
    minage: new FormControl()
  });

  playerNumber = this.range(1, 10);
  playingTime = this.range(25, 300, 25);
  ages = this.range(0, 99);

  constructor(private detailledSearchService: DetailledSearchService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    let formObject = this.detailledSearch.getRawValue(); // {name: '', description: ''}

    this.detailledSearchService.getBoardGames(formObject).then(boardGameList => {
      this.boardGameList = boardGameList;
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      }
      this.router.navigated = false;
      this.router.navigate([''], { state: { data: this.boardGameList } });
    })
  }

  range(start, end, step = 1) {
    return [...Array(Math.ceil((1 + end - start) / step)).keys()].map(v => start + v * step)
  }
}
