import counterSaga from 'features/counter/counterSaga';
import WatchUserSaga from 'features/users/userSaga';
import { all } from 'redux-saga/effects';

// function* helloSage() {
//   console.log('HEllo saga');
// }

export default function* rootSaga() {
  console.log('root saga');
  yield all([WatchUserSaga(), counterSaga()]);
}
