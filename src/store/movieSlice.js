import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      // add user
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      // add user
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      // add user
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      // add user
      state.trailerVideo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNowPlayingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addTrailerVideo,
} = movieSlice.actions;

export default movieSlice.reducer;
