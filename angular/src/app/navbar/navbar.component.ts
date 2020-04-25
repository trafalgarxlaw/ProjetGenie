import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BoardGame } from '../interfaces/boardGame';
import { NavbarService } from './navbar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  boardGameList: Array<BoardGame>;
  searchForm: FormGroup;
  randomNumber: number;

  constructor(private fb: FormBuilder, private navbarService: NavbarService, private router: Router) {
    this.createForm();
  }
  createForm() {
    this.searchForm = this.fb.group({
      search: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.changeRandomValue();
  }

  goHome() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.navigated = false;
    this.router.navigate(['']);
  }

  sendSearch() {
    this.navbarService.getByTitle(this.searchForm.get('search').value).then(boardGameList => {
      this.boardGameList = boardGameList;
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      }
      this.router.navigated = false;
      this.router.navigate([''], { state: { data: this.boardGameList } });
    });
    this.searchForm.reset()
  }

  changeRandomValue() {
    this.randomNumber = Math.floor(Math.random() * 90400) + 1;
  }

  goToRandomUrl() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.navigated = false;
    this.router.navigate(['/boardGame/' + this.randomNumber]);
    this.changeRandomValue();
  }
}
