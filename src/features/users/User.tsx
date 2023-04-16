import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchingUser, selectUserList, selectStateLoading } from './userSlice';

export function UserList() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectStateLoading);
  const lists = useAppSelector(selectUserList);
  return (
    <div>
      {isLoading === 'loading' ? <div>Loading</div> : <div>UserList</div>}
      <button onClick={() => dispatch(fetchingUser())}>Fetch</button>
      {lists.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}
