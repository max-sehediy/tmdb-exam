import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import SearchField from "./SearchField";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { PROFILE_PAGE } from "../utils/constans";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white",
  },
  input: {
    "&.MuiInputBase-input.MuiInput-input": {
      color: "red",
    },
  },
  avatar: {
    backgroundColor: deepOrange[500],
    cursor:'pointer'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.currentUser);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.title}>
            <Typography variant="h6">The Movies website</Typography>
          </Link>
          <SearchField />
          <Avatar
            onClick={() => history.push(PROFILE_PAGE)}
            className={classes.avatar}
          >
            {currentUser.nikename[0]}
          </Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
}
