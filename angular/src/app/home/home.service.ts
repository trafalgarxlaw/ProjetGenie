import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoardGame } from '../interfaces/boardGame';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private urlGetAll = '/api/boardGames';
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  async getBoardGames() {
    return this.httpClient.get<Array<BoardGame>>(this.urlGetAll).toPromise();
  }
}
