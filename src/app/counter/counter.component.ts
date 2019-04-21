import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as CounterReducer from './state/counter.reducer';
import * as CounterActions from './state/counter.actions';
import { getCount } from './state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  // Storeでの値変更を順次受け付けれるように型をObservableに変更します
  count$: Observable<number>;

  constructor(private store: Store<CounterReducer.State>) {
    // Storeからカウンタを取得します
    this.count$ = store.select(getCount);
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(new CounterActions.CountIncrement());
  }

  decrement() {
    this.store.dispatch(new CounterActions.CountDecrement());
  }
}
