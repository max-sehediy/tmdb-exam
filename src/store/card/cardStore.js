import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchMovieById = createAsyncThunk(
  'card/fetchMovieById',
  async (movieId) => {
    const response = await axios.get(`https://!api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_DB_KEY}&language=ru-RU`)
    // const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${movieId}`)
    console.log(typeof response.data)
    return response.data
  }
)

const initialState = {
  // card: { "adult": false, "backdrop_path": "/r8pUcom5Mw8igtBpj3AHSAUvH0R.jpg", "belongs_to_collection": null, "budget": 1300000, "genres": [{ "id": 18, "name": "драма" }, { "id": 878, "name": "фантастика" }], "homepage": "", "id": 19, "imdb_id": "tt0017136", "original_language": "de", "original_title": "Metropolis", "overview": "Метрополис — город будущего, разделен на две части. Под землей находятся жилища рабочих, над ними цеха с машинами. В верхнем городе расположены офисы, богатые кварталы и сады развлечений. Вся власть в городе принадлежит магнату Иогану Фендерсону. Его сын — Фредер догадывается о несправедливости, царящей в метрополисе. Спустившись в машинную зону, Фредер приходит в ужас: он видит страшного Молоха, пожирающего людей. Не в силах смириться с увиденным, он начинает борьбу со злом.", "popularity": 13.759, "poster_path": "/8P4bz6mEi9SaeeIGsAzjbMa56CJ.jpg", "production_companies": [{ "id": 12372, "logo_path": null, "name": "UFA", "origin_country": "DE" }], "production_countries": [{ "iso_3166_1": "DE", "name": "Germany" }], "release_date": "1927-02-06", "revenue": 650422, "runtime": 145, "spoken_languages": [{ "english_name": "No Language", "iso_639_1": "xx", "name": "No Language" }, { "english_name": "German", "iso_639_1": "de", "name": "Deutsch" }], "status": "Released", "tagline": "", "title": "Метрополис", "video": false, "vote_average": 8.2, "vote_count": 1842 },
  card: {},
  loading: false,
  err: ' '
}
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovieById.pending]: (state) => { state.loading = true },
    [fetchMovieById.fulfilled]: (state, action) => {
      state.card = action.payload
      state.loading = false
    },
    [fetchMovieById.rejected]: (state, action) => {
      state.loading = false
      state.err = action.error.message
    },
  }
})

export default cardSlice.reducer