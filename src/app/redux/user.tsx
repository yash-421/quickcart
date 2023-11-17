// user.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserDetails {
  name: string;
  address: string;
  mobileNumber: string;
}

interface UserState {
  value: UserDetails;
}

const initialState: UserState = {
  value: {
    name: "John Doe",
    address: "123 Main St, Cityville",
    mobileNumber: "123-456-7890",
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
