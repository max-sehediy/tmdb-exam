import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { language } from "../../http"
import { $host } from "../../http/axios"
import list from '../../listPopularMovies.json'

console.log(list)
console.log(list[0])

export const fetchPopularMovie = createAsyncThunk(
  'lists/fetchPopularMovie',
  async () => {
    // const response = await $host.get(`/movie/popular?api_key=${process.env.REACT_APP_DB_KEY}&language=${language}&page=1`)
    const response = await $host.get(`https://jsonplaceholder.typicode.com/posts`)
    return response.data
  }
)

const initialState = {
  // card: { "adult": false, "backdrop_path": "/r8pUcom5Mw8igtBpj3AHSAUvH0R.jpg", "belongs_to_collection": null, "budget": 1300000, "genres": [{ "id": 18, "name": "драма" }, { "id": 878, "name": "фантастика" }], "homepage": "", "id": 19, "imdb_id": "tt0017136", "original_language": "de", "original_title": "Metropolis", "overview": "Метрополис — город будущего, разделен на две части. Под землей находятся жилища рабочих, над ними цеха с машинами. В верхнем городе расположены офисы, богатые кварталы и сады развлечений. Вся власть в городе принадлежит магнату Иогану Фендерсону. Его сын — Фредер догадывается о несправедливости, царящей в метрополисе. Спустившись в машинную зону, Фредер приходит в ужас: он видит страшного Молоха, пожирающего людей. Не в силах смириться с увиденным, он начинает борьбу со злом.", "popularity": 13.759, "poster_path": "/8P4bz6mEi9SaeeIGsAzjbMa56CJ.jpg", "production_companies": [{ "id": 12372, "logo_path": null, "name": "UFA", "origin_country": "DE" }], "production_countries": [{ "iso_3166_1": "DE", "name": "Germany" }], "release_date": "1927-02-06", "revenue": 650422, "runtime": 145, "spoken_languages": [{ "english_name": "No Language", "iso_639_1": "xx", "name": "No Language" }, { "english_name": "German", "iso_639_1": "de", "name": "Deutsch" }], "status": "Released", "tagline": "", "title": "Метрополис", "video": false, "vote_average": 8.2, "vote_count": 1842 },
  listMovie: list[0] ,
  // listTV: {},
  // listPeople: {},
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
      // state.listMovie = action.payload
      state.loading = false
    },
    [fetchPopularMovie.rejected]: (state, action) => {
      state.loading = false
      state.err = action.error.message
    },
  }
})

export default listsSlice.reducer