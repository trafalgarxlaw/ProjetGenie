import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BoardGame } from '../interfaces/boardGame';

@Injectable({
  providedIn: 'root'
})
export class DetailledSearchService {

  private urlSearch = '/api/search';
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  async getBoardGames(rawData: string) {
    let params = new HttpParams();
    params = params.append('min_player', rawData['minplayers']);
    params = params.append('max_player', rawData['maxplayers']);
    params = params.append('min_time', rawData['minplaytime']);
    params = params.append('max_time', rawData['maxplaytime']);
    params = params.append('min_age', rawData['minage']);
    return this.httpClient.get<Array<BoardGame>>(this.urlSearch, { params: params }).toPromise();
  }
}

