import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setView: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { setView } = viewSlice.actions;

export default viewSlice.reducer;