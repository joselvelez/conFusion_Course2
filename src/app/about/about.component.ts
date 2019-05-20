import { Leader } from '../shared/leader';
import { LeaderService } from './../services/leader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
    this.leaderservice.getLeaders().then(
      promiseParamLeaders => this.leaders = promiseParamLeaders
    );
  }

}
