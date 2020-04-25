import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoardGame } from '../interfaces/boardGame';


@Injectable({
  providedIn: 'root'
})
export class SingleBoardGameService {

  private urlGetById = '/api/boardGame/';
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  async getBoardGame(id: Number) {
    return this.httpClient.get<BoardGame>(this.urlGetById + id).toPromise();
  }
}
