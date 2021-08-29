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
import { imagePath } from "../../../http";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 150,
    height: 360,
    padding:theme.spacing(2),
    margin:theme.spacing(2)
  },
  rating:{
    color:theme.palette.warning.dark
  }
}));

const Item = ({ data }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="250"
            image={imagePath + data?.poster_path}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="body" color='primary'>
              {data.title}
            </Typography>
            <Typography variant="body2" className={classes.rating}>
              Rating: {data.vote_average}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Add to Favorite
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Item;
