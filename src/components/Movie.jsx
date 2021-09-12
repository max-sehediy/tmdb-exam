import {
  Box,
  Container,
  Fab,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { imagePath } from "../http";
import {
  addToFavMovies,
  removeFromFavMovies,
} from "../store/currentUser/currentUser";
import { MOVIE_PAGE } from "../utils/constans";

import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";

const useStyles = makeStyles((theme) => ({
  poster: {
    position: "relative",
    overflow: "hidden",
    padding: 0,
  },
  customBackground: {
    backgroundImage:
      " linear-gradient(to right, rgba(94.12%, 91.76%, 88.24%, 1.00) 150px, rgba(94.12%, 91.76%, 88.24%, 0.84) 100%)",
    padding: 0,
  },
  mainPoster: {
    "& img": {
      height: 450,
      margin: theme.spacing(2),
      borderRadius: 20,
    },
    "&>img": {
      [theme.breakpoints.down("md")]: {
        height: 200,
      },
    },
  },
  mainDesc: {
    [theme.breakpoints.down("md")]: {
      width: 350,
    },
  },
  title: {
    fontWeight: 700,
  },
  adult: {
    border: "1px solid rgba(0,0,0,0.6)",
    padding: "2px 6px",
    marginRight: "10px",
    color: "rgba(0,0,0,0.6)",
    borderRadius: "3px",
  },
  tagline: {
    fontSize: "1.1em",
    fontWeight: 400,
    fontStyle: "italic",
    opacity: 0.7,
    paddingTop: "10px",
  },
  overview: {
    fontSize: "1em",
    fontStyle: "italic",
    color: "grey",
  },
  carusel: {
    height: 190,
    overflow: "scroll",
  },
  altMoviesPost: {
    position: "relative",
    margin: theme.spacing(1),
    cursor: "pointer",
    "&>img": {
      borderRadius: "10px",
      height: "150px",
    },
  },
  altMoviesFooter: {
    cursor: "pointer",
    position: "absolute",
    color: "black",
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 10px",
    bottom: "0px",
    left: 0,
    "&>*": {
      textShadow: "2px -2px 5px floralwhite",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  dateGenre: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  date: {},
  genres: {
    marginRight: "4px",
    display: "flex",
  },
  favBtn: {
    position: "absolute",
    top: 3,
    right: 3,
  },
}));

const Movie = ({ movieItem, altMovies }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.currentUser);
  const year = new Date(movieItem?.release_date);

  const handleClickAdd = (id) => {
    return dispatch(addToFavMovies(id));
  };
  const handleClickRemove = (id) => {
    return dispatch(removeFromFavMovies(id));
  };

  return (
    <Container
      className={classes.poster}
      style={{
        background: `center/100% no-repeat url(${
          imagePath + movieItem?.backdrop_path
        })`,
      }}
    >
      <Container className={classes.customBackground}>
        <Grid container>
          <Grid item sm={12} md={4} className={classes.mainPoster}>
            <img src={imagePath + movieItem?.poster_path} alt="" />
          </Grid>
          <Grid
            item
            sm={12}
            md={8}
            style={{ paddingLeft: "40px" }}
            className={classes.mainDesc}
          >
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" className={classes.title}>
                {movieItem.title} ({year.getFullYear()})
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                className={classes.dateGenre}
              >
                {movieItem.adult ? (
                  <Typography variant="span" className={classes.adult}>
                    18+
                  </Typography>
                ) : null}
                <Typography variant="body1" className={classes.date}>
                  {year.getDay()} / {year.getMonth() + 1} / {year.getFullYear()}
                </Typography>
                <div className={classes.genres}>
                  <FiberManualRecord
                    style={{ fontSize: "14px", margin: "0 4px" }}
                  />
                  {movieItem.genres.map((el, index) => (
                    <Typography variant="body2" key={el.id} data={index}>
                      {el.name}
                      {index === movieItem.genres.length - 1 ? null : ", "}
                    </Typography>
                  ))}
                  <FiberManualRecord style={{ fontSize: "14px" }} />
                </div>
              </Box>
              <Typography variant="body2" className={classes.tagline}>
                {movieItem?.tagline}
              </Typography>
              <Typography
                variant="h3"
                gutterBottom
                style={{ fontWeight: 600, fontSize: "1.25em" }}
              >
                Огляд
              </Typography>
              <Typography variant="body1" className={classes.overview}>
                {movieItem?.overview}
              </Typography>
            </Box>
            <Typography
              variant="h3"
              gutterBottom
              style={{ fontWeight: 600, fontSize: "1.25em" }}
            >
              Рекомендації
            </Typography>
            <Box display="flex" className={classes.carusel}>
              {altMovies.results.map((el) => (
                <Box
                  display="flex"
                  key={el.id}
                  className={classes.altMoviesPost}
                  onClick={() => history.push(MOVIE_PAGE + "/" + el.id)}
                >
                  <img src={imagePath + el.backdrop_path} alt="" />
                  <Box display="flex" className={classes.altMoviesFooter}>
                    <Typography variant="body2" title={el.title}>
                      {el.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ width: "20%", textAlign: "end" }}
                    >
                      {Number(el.vote_average).toFixed(1)}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
      {currentUser.favorites.includes(movieItem.id) ? (
        <Fab
          aria-label="like"
          className={classes.favBtn}
          onClick={() => handleClickRemove(movieItem.id)}
          color="secondary"
        >
          <HighlightOffOutlinedIcon color="primary" />
        </Fab>
      ) : (
        <Fab
          aria-label="like"
          className={classes.favBtn}
          onClick={() => handleClickAdd(movieItem.id)}
          color="secondary"
        >
          <FavoriteOutlinedIcon color="primary" />
        </Fab>
      )}
    </Container>
  );
};

export default Movie;
