import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fab,
  makeStyles,
  Typography,
} from "@material-ui/core";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { imagePath } from "../../../http";
import { MOVIE_PAGE } from "../../../utils/constans";
import { addToFavMovies, removeFromFavMovies } from "../../../store/currentUser/currentUser";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    position: "relative",
  },
  img: {
  },
  rating: {
    color: theme.palette.warning.dark,
  },
  favBtn: {
    position: "absolute",
    top: 3,
    right: 3,
  },
  iconRemove:{
    color:theme.palette.error.main
  }
}));

const Item = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.currentUser);
console.log(currentUser.favorites)
  const handleClickAdd = (id) => {
    return dispatch(addToFavMovies(id));
  };
  const handleClickRemove = (id) => {
    return dispatch(removeFromFavMovies(id));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={imagePath + data?.poster_path}
          title="Contemplative Reptile"
          className={classes.img}
          onClick={() => history.push(MOVIE_PAGE + "/" + data.id)}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" color="primary">
            {data.title}
          </Typography>
          <Typography variant="body2" className={classes.rating}>
            Rating: {data.vote_average}
          </Typography>
        </CardContent>
      </CardActionArea>
      {currentUser.favorites.includes(data.id) ? (
        <Fab
          aria-label="like"
          className={classes.favBtn}
          onClick={() => handleClickRemove(data.id)}
          // color="secondary"
          size='small'
        >
          <HighlightOffOutlinedIcon className={classes.iconRemove} />
        </Fab>
      ) : (
        <Fab
          aria-label="like"
          className={classes.favBtn}
          onClick={() => handleClickAdd(data.id)}
          size='small'

          // color="secondary"
        >
          <FavoriteOutlinedIcon color="secondary" />
        </Fab>
      )}
    </Card>
  );
};

export default Item;
