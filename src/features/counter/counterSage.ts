import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';
// export function* log(action: PayloadAction) {
//   console.log('Log', action);
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log(action);
  console.log('waiting 2s');
  yield delay(2000);
  console.log('waiting done, dispatch action');
  //dispatch action success
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('counter saga');
  //   yield takeEvery('*', log); //tất cả các action
  //   yield takeEvery('counter/increment', log); được khái báo trong slice
  //   yield takeEvery(increment().type,log)
  //   yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
