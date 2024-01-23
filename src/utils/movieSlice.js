import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    showMovieInfo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addShowMovieInfo: (state, action) => {
      state.showMovieInfo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addShowMovieInfo } = movieSlice.actions;

export default movieSlice.reducer;
