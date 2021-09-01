import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { imagePath } from "../../../http";
import { MOVIE_PAGE } from "../../../utils/constans";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    height: "100%",
    // margin: theme.spacing(2),
  },
  img: {
    // minHeight: 360,
    objectFit: "contain",
  },
  rating: {
    color: theme.palette.warning.dark,
  },
}));

const Item = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();

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
      <CardActions style={{ marginTop: "auto", marginBottom: 0 }}>
        <Button
          size="small"
          color="primary"
          onClick={() => history.push(MOVIE_PAGE + "/" + data.id)}
        >
          Add to Favorite
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
