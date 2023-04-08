import counterSaga from 'features/counter/counterSage';
import { all } from 'redux-saga/effects';

function* helloSage() {
  console.log('HEllo saga');
}

export default function* rootSaga() {
  console.log('root saga');
  yield all([helloSage(), counterSaga()]);
}
