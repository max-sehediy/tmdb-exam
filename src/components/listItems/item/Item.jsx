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

const useStyles = makeStyles({
  root: {
    width: 150,
    height: 350,
  },
});

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
            <Typography gutterBottom variant="body">
              {data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {data.vote_average}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Item;