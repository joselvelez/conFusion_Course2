import { Leader } from './../shared/leader';
import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(id: string): Observable<Leader> {
    return of(LEADERS.filter(leaderParam => leaderParam.id = id)[0]).pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter(featLeaderParam => featLeaderParam.featured)[0]).pipe(delay(2000));
  }

  constructor() { }
}
