import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { $host } from "../../http/axios"

export const fetchSearchMovies = createAsyncThunk(
  'searchMovies/fetchByLetter',
  async (letter) => {
    const { data } = await $host.get('search/movie',
      {
        params: {
          query: letter
        }
      }
    )
    return data
  })

const initialState = {
  searchMovies: {},
  page: 0,
  loading: false,
  err: '',
}
export const searchMovies = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSearchMovies.pending]: (state) => {
      state.loading = true
    },
    [fetchSearchMovies.fulfilled]: (state, action) => {
      state.searchMovies = action.payload
      state.page = action.payload.page
      state.loading = false
    },
    [fetchSearchMovies.rejected]: (state, action) => {
      state.err = action.payload
      state.loading = false
    }
  }

})
export default searchMovies.reducer