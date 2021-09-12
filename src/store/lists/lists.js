import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useFetching } from "../../hooks/useFetching"
import { $host } from "../../http/axios"

export const fetchPopularMovie = createAsyncThunk(
  'lists/fetchPopularMovie',
  async (page) => {
    const data = await useFetching('movie', page)
    return data
  }
)
export const fetchGenreMovies = createAsyncThunk(
  'lists/fetchGenreMovies',
  async (genre) => {
    let genres = genre.map(el => el.id).join(',')
    const { data } = await $host.get('discover/movie',
      {
        params: {
          sort_by: 'popularity.desc',
          page: 1,
          with_genres: genres,
        }
      }
    )
    return data
  })

const initialState = {
  listMovie: [],
  page: 1,
  totalPage: 10,
  loading: false,
  err: '',
  jsph: {}
}
export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    nextPage: (state) => { state.page += 1 }
  },
  extraReducers: {
    //! popular list
    [fetchPopularMovie.pending]: (state) => { state.loading = true },
    [fetchPopularMovie.fulfilled]: (state, action) => {
      state.listMovie = [...state.listMovie, ...action.payload.results]
      // state.page = action.payload.page
      state.totalPage = action.payload.total_pages
      state.loading = false
    },
    [fetchPopularMovie.rejected]: (state, action) => {
      state.loading = false
      state.err = action.error.message
    },
    //! genres list
    [fetchGenreMovies.pending]: (state) => { state.loading = true },
    [fetchGenreMovies.fulfilled]: (state, action) => {
      state.loading = false
      state.listMovie = action.payload.results
    },
    [fetchGenreMovies.rejected]: (state, action) => {
      state.loading = false
      state.err = action.payload
    }
  }
})
export const { nextPage } = listsSlice.actions
export default listsSlice.reducer