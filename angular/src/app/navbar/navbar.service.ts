import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoardGame } from '../interfaces/boardGame';
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private urlSearch = '/api/searchTitle';
  constructor(private httpClient: HttpClient) { }


  ngOnInit() {
  }

  async getByTitle(search: string) {
    let params = new HttpParams();
    params = params.append('search', search);
    return this.httpClient.get<Array<BoardGame>>(this.urlSearch, { params: params }).toPromise();
  }

}
