import type { Nullable } from '@food-delivery/utils';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface UserState {
  user: Nullable<User>;
}

interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  avatarPath: string;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Nullable<User>>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const selectUser = (state: RootState) => state.user.user;
