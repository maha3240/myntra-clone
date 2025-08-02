import { createSlice } from "@reduxjs/toolkit";

const fetchingStatusSlice = createSlice({
  name: "fetchingStatus", 
  initialState: {
    markFetchingDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchingDone: (state) => {
      state.markFetchingDone = true;
    },
    markFetchingStarted: (state)=>{
      state.currentlyFetching = true;
    },
    markFetchingFinished:(state )=>{
      state.currentlyFetching = false;
    }
  }
});

export const fetchingStatusActions = fetchingStatusSlice.actions;
export default fetchingStatusSlice;
