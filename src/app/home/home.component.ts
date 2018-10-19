import { Component, OnInit } from '@angular/core';
import {Tiles} from '../models/tiles';
import {DashboardServiceService} from '../dashboard-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiles: Tiles[];

  constructor(private dashboardService: DashboardServiceService) {
    console.log(dashboardService);
  }

  ngOnInit() {
    this.tiles = this.dashboardService.tiles;
  }

}
