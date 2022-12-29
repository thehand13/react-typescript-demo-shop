import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type LoginState = {
  loggedIn: boolean;
  authToken: string | null;
};

const initialState: LoginState = {
  loggedIn: false,
  authToken: null,
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
    login(state, action: PayloadAction<{ fetchedAuthToken: string }>) {
      state.loggedIn = true;
      state.authToken = action.payload.fetchedAuthToken;
    },
    logout(state) {
      state.loggedIn = false;
      state.authToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthStatus.pending, () => {});
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
