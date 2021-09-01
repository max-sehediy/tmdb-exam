import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Movie from "../components/Movie";
import {
  fetchAlternativeMoviesById,
  fetchMovieById,
} from "../store/movieItem/movieItem";

const MoviePage = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, altLoading, movieItem, altMovies } = useSelector(
    (state) => state.movieItem
  );
  useEffect(() => {
    dispatch(fetchMovieById(id));
    dispatch(fetchAlternativeMoviesById(id));
  }, [id]);
  if (loading || altLoading) {
    return <h1>loading</h1>;
  }
  return <Movie movieItem={movieItem} altMovies={altMovies} />;
};

export default MoviePage;
