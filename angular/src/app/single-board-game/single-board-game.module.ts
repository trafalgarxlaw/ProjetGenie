import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleBoardGameComponent } from './single-board-game.component';
import { PageNotFoundModule } from '../page-not-found/page-not-found.module';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    SingleBoardGameComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundModule,
    MatCardModule,
    MatChipsModule
  ],
  exports: [
    SingleBoardGameComponent
  ]
})
export class SingleBoardGameModule { }
