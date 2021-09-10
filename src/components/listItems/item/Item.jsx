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
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { imagePath } from "../../../http";
import { MOVIE_PAGE } from "../../../utils/constans";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    height: "100%",
    position: "relative",
    // margin: theme.spacing(2),
  },
  img: {
    // minHeight: 360,
    objectFit: "contain",
  },
  rating: {
    color: theme.palette.warning.dark,
  },
  favBtn: {
    position: "absolute",
    top: 3,
    right: 3,
  },
}));

const Item = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.currentUser);
  const handleClick = () => {
    console.log(currentUser?.favorites);
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
          onClick={handleClick}
          color="secondary"
        >
          <HighlightOffOutlinedIcon color="primary" />
        </Fab>
      ) : (
        <Fab
          aria-label="like"
          className={classes.favBtn}
          onClick={handleClick}
          color="secondary"
        >
          <FavoriteOutlinedIcon color="primary" />
        </Fab>
      )}
    </Card>
  );
};

export default Item;
