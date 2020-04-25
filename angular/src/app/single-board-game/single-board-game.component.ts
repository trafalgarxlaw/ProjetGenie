import { Component, OnInit } from '@angular/core';
import { BoardGame } from '../interfaces/boardGame';
import { SingleBoardGameService } from './single-board-game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-board-game',
  templateUrl: './single-board-game.component.html',
  styleUrls: ['./single-board-game.component.scss']
})
export class SingleBoardGameComponent implements OnInit {

  boardGameId: Number;
  boardGame: BoardGame;
  isDataAvailable: boolean = false;
  boardGameKeys = Object.keys;

  constructor(private homeService: SingleBoardGameService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.boardGameId = +params.get("id")
    })

    this.homeService.getBoardGame(this.boardGameId).then(boardGame => {
      this.boardGame = boardGame[0];
      this.boardGame["details.description"] = "Description : " + this.boardGame["details.description"];
      this.isDataAvailable = true;
    });
  }



}
