import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import {
  fetchAlternativeMoviesById,
  fetchMovieById,
} from "../store/movieItem/movieItem";

const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, altLoading, movieItem, altMovies, err, altErr } =
    useSelector((state) => state.movieItem);
  useEffect(() => {
    dispatch(fetchMovieById(id));
    dispatch(fetchAlternativeMoviesById(id));
  }, [id]);
  if (loading || altLoading) {
    return <h1>loading</h1>;
  }
  if (err.length || altErr.length) {
    return (
      <div style={{ padding: 50 }}>
        <h3>Error movie: {err}</h3>
        {altErr ? (
          <h3 style={{ marginTop: 20 }}>
            Error alt movies: <strong style={{ color: "red" }}>{altErr}</strong>
          </h3>
        ) : null}
      </div>
    );
  }
  return <Movie movieItem={movieItem} altMovies={altMovies} />;
};

export default MoviePage;
