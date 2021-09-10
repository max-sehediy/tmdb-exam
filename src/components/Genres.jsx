import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Chip } from "@material-ui/core";
import { fetchGenres, removeGenr, selectedGenr } from "../store/genres/genres";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(1),
  },
  chipWait: {
    color: "white",
    backgroundColor: theme.palette.info.main,
  },
  chipSelected: {
    color: theme.palette.error.dark,
  },
}));

const Genres = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { genres, loading, selectedGenres } = useSelector(
    (state) => state.genres
  );
  const handleAdd = (genre) => {
    dispatch(selectedGenr(genre));
  };
  const handleRemove = (genre) => {
    dispatch(removeGenr(genre));
  };
  useEffect(() => {
    dispatch(fetchGenres());

    // eslint-disable-next-line
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {selectedGenres &&
        selectedGenres?.map((el) => (
          <Chip
            key={el.id}
            label={el.name}
            variant="outlined"
            color="secondary"
            size="small"
            clickable
            // className={[classes.chip, classes.chipSelected]}
            className={classes.chip}
            onDelete={() => handleRemove(el)}
          />
        ))}
      {genres?.map((el) => (
        <Chip
          key={el.id}
          label={el.name}
          variant="outlined"
          color="primary"
          size="small"
          clickable
          className={classes.chip}
          // className={[classes.chip, classes.chipWait]}
          onClick={() => handleAdd(el)}
        />
      ))}
    </div>
  );
};

export default Genres;
