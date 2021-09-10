import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { $host } from '../../http/axios'

export const fetchFavMovies = createAsyncThunk(
  'currentUser/fetchFavoriteMovies',
  async (favoritesMovies) => {
    let responseMovies = []
    for await (const movieId of favoritesMovies) {
      const { data } = await $host.get(`movie/${movieId}`)
      responseMovies.push(data)
    }
    return responseMovies
  }
)

const initialState = {
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || { nikename: 'anonym', favorites: [482373, 566525] },
  fetchData: [],
  loading: false,
  err: '',
}
export const currentUser = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setNikename: (state, action) => {
      localStorage.setItem('currentUser', JSON.stringify({ ...state.currentUser, nikename: action.payload }))
      state.currentUser.nikename = action.payload
    }
  },
  extraReducers: {
    [fetchFavMovies.pending]: (state) => { state.loading = true },
    [fetchFavMovies.fulfilled]: (state, action) => {
      state.loading = false
      state.fetchData = action.payload
    },
    [fetchFavMovies.rejected]: (state, action) => {
      state.loading = true
      state.err = action.payload
    },
  }
})

export const { setNikename } = currentUser.actions

export default currentUser.reducer