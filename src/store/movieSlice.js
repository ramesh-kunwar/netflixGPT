import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      // add user
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      // add user
      state.trailerVideo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;
