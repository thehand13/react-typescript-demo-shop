import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type LoginState = {
  loggedIn: boolean;
  loggedAsAdmin: boolean;
};

const initialState: LoginState = {
  loggedIn: true,
  loggedAsAdmin: true,
};

export const fetchAuthStatus = createAsyncThunk(
  'auth/fetchAuthStatus',
  async function () {
    const response = await fetch(
      'https://react-ts-demo-shop-default-rtdb.europe-west1.firebasedatabase.app/auth.json'
    );
    const responseData = response.json();
    return responseData;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(
      state,
      action: PayloadAction<{ passwordIsTrue: boolean; isAdmin: boolean }>
    ) {},
    login(
      state,
      action: PayloadAction<{ passwordIsTrue: boolean; isAdmin: boolean }>
    ) {},
    logout(state) {
      state.loggedIn = false;
      state.loggedAsAdmin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthStatus.pending, () => {});
  },
});

export const { setAuth, login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
