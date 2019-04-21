import { Action } from '@ngrx/store';
import { CounterActionTypes } from './counter.actions';

export interface State {
  count: number;
}

export const initialState: State = {
  // 初期値
  count: 0
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    // 引数として受け取ったActionの型に応じて処理を振り分けます
    // ここではカウンター処理に関連するアクションのみ拾って、他はStateをそのまま返します。
    case CounterActionTypes.CountIncrement:
      // Stateを変更する場合は、Stateがイミュータブルになるように元のStateには変更を加えず
      // Object.assingで新規オブジェクトを作るようにします。
      return Object.assign({}, { ...state, count : state.count + 1 });

    case CounterActionTypes.CountDecrement:
      return Object.assign({}, { ...state, count : state.count - 1 });

    default:
      return state;
  }
}
// コンポーネントでStateのCountを取得するための関数を定義します。
// Storeの方にも定義しますが、ここでは本ファイルで定義している
// Stateのプロパティに関連する処理のみ定義します。
export const getCount = (state: State) => state.count;
