import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { $host } from "../../http/axios"

export const fetchPopularMovie = createAsyncThunk(
  'lists/fetchPopularMovie',
  async () => {
    const response = await $host.get(`popular?&page=1`)
    return response.data
  }
)

const initialState = {
  listMovie: null,
  loading: false,
  err: ' ',
  jsph: {}
}
export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPopularMovie.pending]: (state) => { state.loading = true },
    [fetchPopularMovie.fulfilled]: (state, action) => {
      state.listMovie = action.payload
      state.loading = false
    },
    [fetchPopularMovie.rejected]: (state, action) => {
      state.loading = false
      state.err = action.error.message
    },
  }
})

export default listsSlice.reducer