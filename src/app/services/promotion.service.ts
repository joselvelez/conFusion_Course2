import { delay } from 'rxjs/operators';
import { PROMOTIONS } from './../shared/promotions';
import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
   }

  getPromotion(id: string): Observable<Promotion> {
    return of(PROMOTIONS.filter(promoParam => promoParam.id = id)[0]).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTIONS.filter(promoParam => promoParam.featured)[0]).pipe(delay(2000));
  }

  constructor() { }
}
