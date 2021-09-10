import {
  Box,
  Grid,
  makeStyles,
  // Typography
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useScrollPosition from "../../hooks/useScrollPosition";
import { fetchGenreMovies, fetchPopularMovie } from "../../store/lists/lists";
import Item from "./item/Item";

const useStyles = makeStyles((theme) => ({
  listMovie: {
    padding: theme.spacing(2),
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
    overflow: "scroll",
  },
}));

const ListItems = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { listMovie, loading } = useSelector((state) => state.listMovie);
  const { genres, selectedGenres } = useSelector((state) => state.genres);
  useEffect(() => {
    return dispatch(fetchPopularMovie());
  }, []);
  useEffect(() => {
    if (selectedGenres.length) {
      dispatch(fetchGenreMovies(selectedGenres));
    }
  }, [selectedGenres]);
  // const scrollPosition = useScrollPosition();
  // console.log(scrollPosition)
  return (
    <div>
      {loading ? (
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ margin: "0 20px" }}
        >
          {Array.from(new Array(6)).map((el, index) => (
            <Grid
              container
              item
              xs={12}
              md={4}
              spacing={3}
              alignItems="center"
              key={index}
            >
              <Skeleton
                animation="wave"
                width="80%"
                height={210}
                style={{ marginBottom: 1 }}
              />
              <Skeleton animation="wave" width="80%" />
              <Skeleton animation="wave" width="40%" />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          className={classes.listMovie}
        >
          {listMovie
            ? listMovie.results?.map((el) => (
                <Grid item key={el.id} xs={6} md={3}>
                  <Item data={el} />
                </Grid>
              ))
            : "Oops"}
        </Grid>
      )}
    </div>
  );
};

export default ListItems;
