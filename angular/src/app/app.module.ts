import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';

import { CustomButtonModule } from './custom-button/custom-button.module';

import { NavbarModule } from './navbar/navbar.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { HomeModule } from './home/home.module';
import { SingleBoardGameModule } from './single-board-game/single-board-game.module';
import { DetailledSearchModule } from './detailled-search/detailled-search.module';

@NgModule({
  declarations: [
    AppComponent,
    FontAwesomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomButtonModule,
    NavbarModule,
    PageNotFoundModule,
    HomeModule,
    SingleBoardGameModule,
    DetailledSearchModule
  ],
  providers: [],
  entryComponents: [
    CustomButtonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
