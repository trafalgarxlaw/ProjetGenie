import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { HomeService } from './home.service';
import { BoardGame } from '../interfaces/boardGame';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  boardGameList: Array<BoardGame>;
  isDataAvailable: boolean = false;
  displayedGameList: Array<BoardGame>;

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    if (history.state.data === undefined) {
      this.homeService.getBoardGames().then(boardGameList => {
        this.boardGameList = boardGameList;
        this.isDataAvailable = true;
        this.displayedGameList = boardGameList.slice(0, 10);
        this.length = this.boardGameList.length;
      });
    } else {
      this.boardGameList = history.state['data'];
      this.displayedGameList = this.boardGameList.slice(0, 10);
      this.isDataAvailable = true;
      this.length = this.boardGameList.length;
    }
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  public getServerData(event?: PageEvent) {
    this.displayedGameList = this.boardGameList.slice(event.pageIndex * event.pageSize, event.pageIndex * event.pageSize + event.pageSize);
  }
}
