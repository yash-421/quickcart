// user.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserDetails {
  name: string;
  address: string;
  number: string;
  email: string;
}

interface UserState {
  value: UserDetails;
}

const initialState: UserState = {
  value: {
    name: "John Doe",
    address: "123 Main St, Cityville",
    number: "1234567890",
    email: "john@gmail.com",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserDetails: (
      state: UserState,
      action: PayloadAction<Partial<UserDetails>>
    ) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { updateUserDetails } = userSlice.actions;
export default userSlice.reducer;
