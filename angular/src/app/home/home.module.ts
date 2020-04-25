import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundModule } from '../page-not-found/page-not-found.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    PageNotFoundModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    MatChipsModule,
    MatDividerModule,
    MatTooltipModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
