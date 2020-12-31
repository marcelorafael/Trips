<<<<<<< HEAD
import { all } from 'redux-saga/effects';

import reserve from './reserve/sagas';

export default function* rootSaga(){
  return yield all([
    reserve,
  ])
=======
import {all} from 'redux-saga/effects';

import reserve from './reserve/saga';

export default function* rootSaga() {
    return yield all([
        reserve,
    ]);
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
}