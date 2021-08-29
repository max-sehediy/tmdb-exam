import {
  Grid,
  makeStyles,
  // Typography
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovie } from "../../store/lists/lists";
import Item from "./item/Item";

const useStyles = makeStyles((theme) => ({
  listMovie: {
    padding: theme.spacing(4),
    height:'500px',
    overflow:'scroll'
  },
}));

const ListItems = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { listMovie, loading, err } = useSelector((state) => state.listMovie);
  useEffect(() => {
    dispatch(fetchPopularMovie());
  }, []);
  console.log(listMovie);
  return (
    <div>
      {loading ? (
        <Grid container alignItems="center" justifyContent="center" style={{ margin: "0 20px" }}>
          {Array.from(new Array(6)).map((el) => (
            <Grid
              container
              item
              xs={12}
              md={4}
              spacing={3}
              alignItems="center"
              justifyContent="start"
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
          alignItems="center"
          justifyContent="center"
          
          className={classes.listMovie}
        >
          {listMovie
            ? listMovie.results?.map((el) => (
                <Item md={4} key={el.id} data={el} spacing={1} />
              ))
            : "Oops"}
        </Grid>
      )}
    </div>
  );
};

export default ListItems;
