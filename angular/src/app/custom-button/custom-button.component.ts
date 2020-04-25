import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

  @Input() buttonText: string;
  @Input() functionOnClick: any;
  text: string;
  private boardgameList = '/api/boardgame/1';

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
  }

  clickMe(): void {
    this.functionOnClick();
    this._httpClient.get(this.boardgameList)
      .subscribe(boardgame => {
        console.log(boardgame);
      });
    ;
  }

}
