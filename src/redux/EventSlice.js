import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'evento',
  initialState: { evento: null },
  reducers: {
    addEvent: (state, action) => {
      state.evento = action.payload.evento;
    },
    removeEvent: (state, action) => {
      state.evento = null;
    },
  },
});

export const { addEvent, removeEvent } = eventSlice.actions;
export default eventSlice.reducer;
