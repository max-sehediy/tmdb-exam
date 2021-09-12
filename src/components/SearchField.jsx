import React, { useEffect, useState } from "react";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import InputSearch from "./InputSearch";
import { fetchGenres } from "../store/genres/genres";
import { Link } from "react-router-dom";
import { MOVIE_PAGE } from "../utils/constans";

const useStyle = makeStyles((theme) => ({
  area: {
    padding: 0,
    margin: 0,
    width: "80vw",
    position: "absolute",
    top: 64,
    left: 0,
    color: "#000",
    backgroundColor: "#fafafa",
    zIndex: 50,
  },
  response: {
    display: "flex",
    alignItems: "center",
    padding: "15px 10px",
    border: "3px solid white",
    borderRadius: 20,
    backgroundColor: "#a29bfe",
    margin: 30,
    "&>h6": {
      [theme.breakpoints.up("md")]: {
        width: "60%",
      },
      color: "#f5f6fa",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  title: {
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      justifyContent: "start",

      width: "100%",
    },
  },
  genre: {
    "&>p": {
      marginRight: 3,
    },
    flexWrap: "wrap",
    justifyContent: "end",
  },
}));

const SearchField = () => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const { searchMovies, loading } = useSelector((state) => state.searchMovies);
  const { genres } = useSelector((state) => state.genres);
  const [showResponse, setShowResponse] = useState(false);
  useEffect(() => {
    if (!genres.length) {
      dispatch(fetchGenres());
    }
  }, []);
  return (
    <div>
      <InputSearch
        showResponse={showResponse}
        setShowResponse={setShowResponse}
      />
      {showResponse ? (
        <Container className={classes.area}>
          {loading ? (
            <h6>Loading...</h6>
          ) : (
            searchMovies.results?.map((el) => (
              <Link
                to={MOVIE_PAGE + "/" + el.id}
                style={{ textDecoration: "none" }}
                key={el.id}
                onClick={() => console.log("click")}
              >
                <Box className={classes.response}>
                  <Typography variant="h6" className={classes.title}>
                    {el.title} ({new Date(el.release_date).getFullYear()})
                  </Typography>
                  <Box display="flex" className={classes.genre}>
                    {el.genre_ids.map((g, index) => (
                      <Typography variant="body1" key={index}>
                        {genres.find((e) => e.id === g).name}
                        {el.genre_ids.length - 1 === index ? null : ", "}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Link>
            ))
          )}
        </Container>
      ) : null}
    </div>
  );
};

export default SearchField;
