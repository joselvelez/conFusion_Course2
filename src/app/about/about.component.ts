import { LEADERS } from './../shared/leaders';
import { LeaderService } from './../services/leader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders = LEADERS;

  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {

  }

}
