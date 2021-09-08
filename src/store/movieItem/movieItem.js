import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useFetching } from "../../hooks/useFetching"
import { $host } from "../../http/axios"

export const fetchMovieById = createAsyncThunk(
  'movie/fetchMovieById',
  async (movieId) => {
    const data = await useFetching('movie', null, movieId)
    return data
  }
)
export const fetchAlternativeMoviesById = createAsyncThunk(
  'movie/fetchAlternativeMovieById',
  async (movieId) => {
    const data = await useFetching('movie', 0, movieId, true)
    return data
  }
)

const initialState = {
  movieItem: {
    release_date: '',
    poster: '',
    backdrop_path: '',
    poster_path: '',
    title: '',
    adult: '',
    genres: [],
    tagline: '',
    overview: '',
  },

  loading: true,
  err: '',
  // Alternative Movies
  altMovies: {
    result: []
  },
  altLoading: true,
  altErr: ''
}
export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
  },
  extraReducers: {
    //! movie
    [fetchMovieById.pending]: (state) => { state.loading = true },
    [fetchMovieById.fulfilled]: (state, action) => {
      state.movieItem = action.payload
      state.loading = false
    },
    [fetchMovieById.rejected]: (state, action) => {
      state.loading = false
      state.err = action.error.message
    },
    //! alt movies
    [fetchAlternativeMoviesById.pending]: (state) => { state.altLoading = true },
    [fetchAlternativeMoviesById.fulfilled]: (state, action) => {
      state.altMovies = action.payload
      state.altLoading = false
    },
    [fetchAlternativeMoviesById.rejected]: (state, action) => {
      state.altLoading = false
      state.altErr = action.error.message
    },
  }
})
// export const {  } = movieSlice.actions
export default movieSlice.reducer