import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products : any;

  constructor( private _homeService: HomeService ){ 
    this._homeService.fetchItems().subscribe(
      res => this.products = res,
      err => console.log("Error")
    )
  }

  ngOnInit(): void {
  }

}
