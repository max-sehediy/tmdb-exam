import axios from "axios";

export const $host = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})