import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  genres: [],
  loading: false,
  err: '',
  selectedGenres: [],
}


export const fetchGenres = createAsyncThunk(
  'genres/fetchGenres',
  async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_DB_KEY}&language=us-US`)
    return data.genres

  }
)

export const genres = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    selectedGenr: (state, action) => {
      state.selectedGenres.push(action.payload)
      state.genres = state.genres.filter(el => el.id !== action.payload.id)
    },
    removeGenr: (state, action) => {
      state.selectedGenres = state.selectedGenres.filter(el => el.id !== action.payload.id)
      state.genres.push(action.payload)
    },
  },
  extraReducers: {
    [fetchGenres.pending]: (state) => { state.loading = true },
    [fetchGenres.fulfilled]: (state, action) => { state.genres = action.payload; state.loading = false },
    [fetchGenres.rejected]: (state, action) => { state.err = action.payload; state.loading = false }
  }
})
export const { selectedGenr, removeGenr } = genres.actions
export default genres.reducer