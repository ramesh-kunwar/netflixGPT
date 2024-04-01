import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      // add user
      state.nowPlayingMovies = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNowPlayingMovies } = movieSlice.actions;

export default movieSlice.reducer;
