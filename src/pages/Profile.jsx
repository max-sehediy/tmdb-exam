import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fab,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";

import { deepOrange } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import FormDialog from "../components/utils/modal";
import { imagePath } from "../http";
import {
  addToFavMovies,
  fetchFavMovies,
  removeFromFavMovies,
} from "../store/currentUser/currentUser";
import { MOVIE_PAGE } from "../utils/constans";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    position: "relative",
  },
  header: {
    "&>div": {
      padding: theme.spacing(2),
      alignItems: "center",
    },
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    backgroundColor: deepOrange[500],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
  },
  fav: {},
  media: {
    width: 250,
  },
  cards: {
    width: "90wv",
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: 250,
    margin: theme.spacing(2),
    position: "relative",
  },
  modalButton: {
    position: "absolute",
    top: 10,
    right: 5,
  },
  favBtn: {
    position: "absolute",
    top: 3,
    right: 3,
  },
}));

const Profile = () => {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { currentUser, fetchData, loading } = useSelector(
    (state) => state.currentUser
  );
  const handleClickOpen = () => {
    return setOpenModal(true);
  };
  useEffect(() => {
    if (currentUser.favorites.length) {
      return dispatch(fetchFavMovies(currentUser.favorites));
    }
  }, []);
  const handleClickAdd = (id) => {
    return dispatch(addToFavMovies(id));
  };
  const handleClickRemove = (id) => {
    return dispatch(removeFromFavMovies(id));
  };
  if (loading) {
    return <h1>`Please wait :)`</h1>;
  }
  return (
    <Box display="flex" flexDirection="column" className={classes.container}>
      <Grid container className={classes.header}>
        <Grid item sm={4}>
          <div className={classes.avatar}>{currentUser.nikename[0]}</div>
        </Grid>
        <Grid item sm={8}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h4" color="primary">
              <span style={{ color: "white" }}>Hello</span>
              {currentUser.nikename}
            </Typography>
            <Typography variant="h4" color="error" className={classes.fav}>
              You liked:
              {currentUser.favorites.length
                ? ` ${currentUser.favorites.length} `
                : ` 0 `}
              movies
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" className={classes.cards} justifyContent="center">
        {fetchData.length ? (
          fetchData.map((item) => (
            <Card key={item.id} className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={imagePath + item.poster_path}
                  title={item.title}
                  onClick={() => history.push(MOVIE_PAGE + "/" + item.id)}
                />
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                </CardContent>
              </CardActionArea>
              {currentUser.favorites.includes(item.id) ? (
                <Fab
                  aria-label="like"
                  className={classes.favBtn}
                  onClick={() => handleClickRemove(item.id)}
                  color="secondary"
                >
                  <HighlightOffOutlinedIcon color="primary" />
                </Fab>
              ) : (
                <Fab
                  aria-label="like"
                  className={classes.favBtn}
                  onClick={() => handleClickAdd(item.id)}
                  color="secondary"
                >
                  <FavoriteOutlinedIcon color="primary" />
                </Fab>
              )}
            </Card>
          ))
        ) : (
          <h4>You don't have favourites movies</h4>
        )}
      </Box>
      <Button
        onClick={handleClickOpen}
        className={classes.modalButton}
        variant="contained"
        color="secondary"
      >
        Change nikename
      </Button>
      <FormDialog
        nikename={currentUser.nikename}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </Box>
  );
};
export default Profile;
