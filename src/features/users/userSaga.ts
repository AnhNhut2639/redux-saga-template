import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UserState, fetchUserSuccess, fetchingUser } from './userSlice';

import { GetUserAPI } from './request';
import { AxiosResponse } from 'axios';

function* handleGetUser(action: PayloadAction<UserState[]>) {
  try {
    const response: AxiosResponse<UserState[]> = yield call(GetUserAPI);
    const { data } = response;
    yield put(fetchUserSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* WatchUserSaga() {
  yield takeLatest(fetchingUser.toString(), handleGetUser);
}
