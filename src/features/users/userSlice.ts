import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
export interface UserState {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  status: 'idle' | 'loading' | 'failed';
}

const initialState = {
  listUsers: [
    {
      userId: 0,
      id: 0,
      title: '',
      completed: false,
    },
  ],
  status: 'idle',
};
export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchingUser: (state) => {
      state.status = 'loading';
    },
    fetchUserSuccess: (state, action: PayloadAction<UserState[]>) => {
      state.status = 'idle';
      state.listUsers = [...action.payload];
    },
  },
});

export const { fetchUserSuccess, fetchingUser } = UserSlice.actions;
export const selectUserList = (state: RootState) => state.user.listUsers;
export const selectStateLoading = (state: RootState) => state.user.status;

export default UserSlice.reducer;
