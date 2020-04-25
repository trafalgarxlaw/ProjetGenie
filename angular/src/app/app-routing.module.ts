import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SingleBoardGameComponent } from './single-board-game/single-board-game.component';
import { DetailledSearchComponent } from './detailled-search/detailled-search.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'boardGame/:id', component: SingleBoardGameComponent },
  { path: 'detailledSearch', component: DetailledSearchComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
