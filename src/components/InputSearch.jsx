import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchMovies } from "../store/searchMovies/searchMovies";

const InputSearch = ({ setShowResponse }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    return setValue(e.target.value.toLowerCase());
  };
  const handleClick = () => {
    if (value) return setShowResponse(true);
  };
  const handleBlur = () => {
    return setShowResponse(false);
  };
  useEffect(() => {
    if (value) return dispatch(fetchSearchMovies(value));
    //! for change style
    // setTimeout(() => {
    //   setShowResponse(true);
    // }, 1500);
  }, [value]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onFocus={handleClick}
        onBlur={handleBlur}
        onChange={handleSearch}
        value={value}
      />
    </div>
  );
};

export default InputSearch;
