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

  const data={
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          28,
          35
        ],
        "id": 810086,
        "original_language": "en",
        "original_title": "Star War: The Third Gathers: The Backstroke of the West",
        "overview": "The war came! The republic encountered. Two squares fight the vehemence. The improbity fills the world.  The Space General of the alliance is skillful. Kidnap the D the Speaker the conduct.  The proper abruption alliance troops tries. Ratio Prosperous drive with the.",
        "popularity": 3.716,
        "poster_path": "/fSoFYhyl0pEcYnlawxXEvTDJQKJ.jpg",
        "release_date": "2009-01-27",
        "title": "Star War: The Third Gathers: The Backstroke of the West",
        "video": true,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [],
        "id": 665098,
        "original_language": "en",
        "original_title": "Lone Star Holy War",
        "overview": "Lone Star Holy War is a sports documentary highlighting pivotal moments of the century old rivalry between Texas and Texas A&M. The last time both teams met was on November 24, 2011. This ended the 118 year old rivalry and Thanksgiving tradition for generations of Texans across the state. Lone Stary Holy War includes commentary from past coaches, players, sports analysts and fans, plus gripping game footage.",
        "popularity": 1.219,
        "poster_path": "/nkBU4qXCmvJRjwmmWt5esjiFMQx.jpg",
        "release_date": "2014-09-06",
        "title": "Lone Star Holy War",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/jn52me8AagfNt7r84SgQbV0R9ZG.jpg",
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 181812,
        "original_language": "en",
        "original_title": "Star Wars: The Rise of Skywalker",
        "overview": "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
        "popularity": 132.896,
        "poster_path": "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
        "release_date": "2019-12-19",
        "title": "Star Wars: The Rise of Skywalker",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 7025
      },
      {
        "adult": false,
        "backdrop_path": "/7LZ0K4FsALrt7OeNIGOVLNuKQRU.jpg",
        "genre_ids": [
          878,
          12,
          28,
          80
        ],
        "id": 348350,
        "original_language": "en",
        "original_title": "Solo: A Star Wars Story",
        "overview": "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.",
        "popularity": 58.116,
        "poster_path": "/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg",
        "release_date": "2018-05-24",
        "title": "Solo: A Star Wars Story",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 6497
      },
      {
        "adult": false,
        "backdrop_path": "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
        "genre_ids": [
          12,
          28,
          878
        ],
        "id": 11,
        "original_language": "en",
        "original_title": "Star Wars",
        "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        "popularity": 59.811,
        "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "release_date": "1977-05-25",
        "title": "Star Wars",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 15945
      },
      {
        "adult": false,
        "backdrop_path": "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
        "genre_ids": [
          878,
          28,
          12
        ],
        "id": 181808,
        "original_language": "en",
        "original_title": "Star Wars: The Last Jedi",
        "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
        "popularity": 68.482,
        "poster_path": "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        "release_date": "2017-12-14",
        "title": "Star Wars: The Last Jedi",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 12201
      },
      {
        "adult": false,
        "backdrop_path": "/6t8ES1d12OzWyCGxBeDYLHoaDrT.jpg",
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 330459,
        "original_language": "en",
        "original_title": "Rogue One: A Star Wars Story",
        "overview": "A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.",
        "popularity": 60.955,
        "poster_path": "/5jX3p0apUG5bkMHtnKZch0xpkBS.jpg",
        "release_date": "2016-12-15",
        "title": "Rogue One: A Star Wars Story",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 12372
      },
      {
        "adult": false,
        "backdrop_path": "/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg",
        "genre_ids": [
          28,
          12,
          878,
          14
        ],
        "id": 140607,
        "original_language": "en",
        "original_title": "Star Wars: The Force Awakens",
        "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
        "popularity": 54.081,
        "poster_path": "/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
        "release_date": "2015-12-17",
        "title": "Star Wars: The Force Awakens",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 16115
      },
      {
        "adult": false,
        "backdrop_path": "/1Lhc32P0a62BgMFgd20wXR1osR3.jpg",
        "genre_ids": [
          10751,
          16,
          12,
          35,
          878
        ],
        "id": 732670,
        "original_language": "en",
        "original_title": "The Lego Star Wars Holiday Special",
        "overview": "As her friends prep for a Life Day holiday celebration, Rey journeys with BB-8 on a quest to gain a deeper knowledge of the Force at a mysterious Jedi Temple. There, she embarks on a cross-timeline adventure through beloved moments in Star Wars history, coming into contact with iconic heroes and villains from all eras of the saga. But will she make it back in time for the Life Day feast?",
        "popularity": 42.522,
        "poster_path": "/zyzJSI7UZZzz5Toj10rYGF5689z.jpg",
        "release_date": "2020-11-17",
        "title": "The Lego Star Wars Holiday Special",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 188
      },
      {
        "adult": false,
        "backdrop_path": "/sNNFLEcAuy4C3RyXCnKoArn7Aty.jpg",
        "genre_ids": [
          16,
          28,
          878,
          12
        ],
        "id": 12180,
        "original_language": "en",
        "original_title": "Star Wars: The Clone Wars",
        "overview": "Set between Episode II and III, The Clone Wars is the first computer animated Star Wars film. Anakin and Obi Wan must find out who kidnapped Jabba the Hutt's son and return him safely. The Seperatists will try anything to stop them and ruin any chance of a diplomatic agreement between the Hutts and the Republic.",
        "popularity": 26.803,
        "poster_path": "/ywRtBu88SLAkNxD0GFib6qsFkBK.jpg",
        "release_date": "2008-08-05",
        "title": "Star Wars: The Clone Wars",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 1424
      },
      {
        "adult": false,
        "backdrop_path": "/dhkztgCspLkl1bKTdX9lR81PAPG.jpg",
        "genre_ids": [
          12,
          28,
          878
        ],
        "id": 1893,
        "original_language": "en",
        "original_title": "Star Wars: Episode I - The Phantom Menace",
        "overview": "Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.",
        "popularity": 32.846,
        "poster_path": "/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg",
        "release_date": "1999-05-19",
        "title": "Star Wars: Episode I - The Phantom Menace",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 11342
      },
      {
        "adult": false,
        "backdrop_path": "/mdnRgAQJIXnBm0o7DaIHsqLd067.jpg",
        "genre_ids": [
          878,
          12,
          28
        ],
        "id": 1895,
        "original_language": "en",
        "original_title": "Star Wars: Episode III - Revenge of the Sith",
        "overview": "The evil Darth Sidious enacts his final plan for unlimited power -- and the heroic Jedi Anakin Skywalker must choose a side.",
        "popularity": 32.544,
        "poster_path": "/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg",
        "release_date": "2005-05-17",
        "title": "Star Wars: Episode III - Revenge of the Sith",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 10623
      },
      {
        "adult": false,
        "backdrop_path": "/uNjBnOmdjZoiWTLQ938YJZ1cYVU.jpg",
        "genre_ids": [
          16,
          35,
          10751,
          878,
          12,
          10770
        ],
        "id": 392216,
        "original_language": "en",
        "original_title": "Phineas and Ferb: Star Wars",
        "overview": "Phineas and Ferb become the galaxy's unlikeliest last hope when they must return the Death Star plans to the Rebel Alliance.",
        "popularity": 16.913,
        "poster_path": "/xomphpz7MIasqVluPX83TjoTL8G.jpg",
        "release_date": "2014-07-26",
        "title": "Phineas and Ferb: Star Wars",
        "video": false,
        "vote_average": 7,
        "vote_count": 118
      },
      {
        "adult": false,
        "backdrop_path": "/dNt5q68BBkddBxlvrHDa1apyBy8.jpg",
        "genre_ids": [
          12,
          28,
          878
        ],
        "id": 1894,
        "original_language": "en",
        "original_title": "Star Wars: Episode II - Attack of the Clones",
        "overview": "Following an assassination attempt on Senator Padmé Amidala, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi investigate a mysterious plot that could change the galaxy forever.",
        "popularity": 26.673,
        "poster_path": "/oZNPzxqM2s5DyVWab09NTQScDQt.jpg",
        "release_date": "2002-05-15",
        "title": "Star Wars: Episode II - Attack of the Clones",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 10245
      },
      {
        "adult": false,
        "backdrop_path": "/oCbmC3LCck1BnA70tzbpovFmTgK.jpg",
        "genre_ids": [
          10751,
          16,
          878,
          35
        ],
        "id": 857702,
        "original_language": "en",
        "original_title": "LEGO Star Wars Terrifying Tales",
        "overview": "Poe Dameron and BB-8 must face the greedy crime boss Graballa the Hutt, who has purchased Darth Vader’s castle and is renovating it into the galaxy’s first all-inclusive Sith-inspired luxury hotel.",
        "popularity": 12.267,
        "poster_path": "/ulvOei2pwDQIRuaIVe3aVwMmZQ9.jpg",
        "release_date": "2021-10-01",
        "title": "LEGO Star Wars Terrifying Tales",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          16,
          35,
          878
        ],
        "id": 42979,
        "original_language": "en",
        "original_title": "Robot Chicken: Star Wars",
        "overview": "A series of 30 sketches, following the hilarious antics of various characters from a galaxy, far, far away.",
        "popularity": 10.955,
        "poster_path": "/h44WN4mVJ6wEpJgLaaNoFjv0NAo.jpg",
        "release_date": "2007-07-17",
        "title": "Robot Chicken: Star Wars",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 177
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          35,
          878,
          16
        ],
        "id": 51888,
        "original_language": "en",
        "original_title": "Robot Chicken: Star Wars Episode III",
        "overview": "Robot Chicken: Star Wars Episode III, directed by Chris McKay, combines the satirical sensibilities of Green and Matthew Senreich's Robot Chicken with characters of the Star Wars universe.",
        "popularity": 13.354,
        "poster_path": "/mi2lVho2zpfwcxI6yC1QYJi435D.jpg",
        "release_date": "2010-12-19",
        "title": "Robot Chicken: Star Wars Episode III",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 105
      },
      {
        "adult": false,
        "backdrop_path": "/ae9xlnkS2qb5Dy9Mtlu68AWh42O.jpg",
        "genre_ids": [
          12,
          35,
          10751,
          878,
          10770
        ],
        "id": 74849,
        "original_language": "en",
        "original_title": "The Star Wars Holiday Special",
        "overview": "Luke Skywalker and Han Solo battle evil Imperial forces to help Chewbacca reach his imperiled family on the Wookiee planet - in time for Life Day, their most important day of the year!",
        "popularity": 12.834,
        "poster_path": "/1TY4OAkcHRovlHDxSLW7UDJlild.jpg",
        "release_date": "1978-12-01",
        "title": "The Star Wars Holiday Special",
        "video": false,
        "vote_average": 3.2,
        "vote_count": 327
      },
      {
        "adult": false,
        "backdrop_path": "/dMZxEdrWIzUmUoOz2zvmFuutbj7.jpg",
        "genre_ids": [
          12,
          28,
          878
        ],
        "id": 1891,
        "original_language": "en",
        "original_title": "The Empire Strikes Back",
        "overview": "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
        "popularity": 30.17,
        "poster_path": "/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
        "release_date": "1980-05-20",
        "title": "The Empire Strikes Back",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 13310
      },
      {
        "adult": false,
        "backdrop_path": "/iP2tEA2A77qhbhRfcFkiD6WFOqH.jpg",
        "genre_ids": [
          12,
          28,
          878
        ],
        "id": 1892,
        "original_language": "en",
        "original_title": "Return of the Jedi",
        "overview": "Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.",
        "popularity": 25.986,
        "poster_path": "/mDCBQNhR6R0PVFucJl0O4Hp5klZ.jpg",
        "release_date": "1983-05-25",
        "title": "Return of the Jedi",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 11782
      }
    ],
    "total_pages": 8,
    "total_results": 157
  }

const initialState = {
  searchMovies: data,
  page: 0,
  loading: false,
  err: '',
  // genres: [{ "id": 28, "name": "Action" }, { "id": 12, "name": "Adventure" }, { "id": 16, "name": "Animation" }, { "id": 35, "name": "Comedy" }, { "id": 80, "name": "Crime" }, { "id": 99, "name": "Documentary" }, { "id": 18, "name": "Drama" }, { "id": 10751, "name": "Family" }, { "id": 14, "name": "Fantasy" }, { "id": 36, "name": "History" }, { "id": 27, "name": "Horror" }, { "id": 10402, "name": "Music" }, { "id": 9648, "name": "Mystery" }, { "id": 10749, "name": "Romance" }, { "id": 878, "name": "Science Fiction" }, { "id": 10770, "name": "TV Movie" }, { "id": 53, "name": "Thriller" }, { "id": 10752, "name": "War" }, { "id": 37, "name": "Western" }]
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