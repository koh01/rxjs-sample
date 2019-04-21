import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCounter from './counter.reducer';

export interface State {

  counter: fromCounter.State;
}

export const reducers: ActionReducerMap<State> = {

  counter: fromCounter.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// コンポーネントでStateのプロパティを取得するための関数を定義します。
// 複数コンポーネントで使う度に定義するのは冗長なのでココで共通的に定義します。
export const getCounterFeatureState = createFeatureSelector<State>('counter');
export const getCounter = createSelector(getCounterFeatureState, s => s.counter);
export const getCount = createSelector(getCounter, fromCounter.getCount);