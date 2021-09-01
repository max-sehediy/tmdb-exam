import axios from "axios";

export const $host = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: process.env.REACT_APP_DB_KEY,
    language: 'ru-RU'
  }
})