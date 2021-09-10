import { $host } from "../http/axios";

export const useFetching = async (
  type = 'movie',
  page = 1,
  movieId = false,
  similarMovies = false,
  genres = false
) => {
  if (similarMovies) {
    const { data } = await $host.get(`${type}/${movieId}/similar`)
    return data
  }
  if (movieId) {
    const { data } = await $host.get(`${type}/${movieId}`)
    return data
  }
  if (genres) {
    const { data } = await $host.get(`discover/${type}`,
      {
        params: {
          with_genres: genres
        }
      })
    return data
  }
  const { data } = await $host.get(`discover/${type}`,
    {
      params: {
        sort_by: 'popularity.desc',
        page: page,
      }
    }
  )
  return data
}

