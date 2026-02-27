import { createSlice } from "@reduxjs/toolkit";

interface VerificationState {
  isAdult: boolean;
}

const initialState: VerificationState = {
  isAdult: false,
};

export const verificationSlice = createSlice({
  name: "verification",
  initialState,
  reducers: {
    setVerification: (state, { payload }) => {
      state.isAdult = payload;
    },
  },
});

export const { setVerification } = verificationSlice.actions;
export default verificationSlice.reducer;
