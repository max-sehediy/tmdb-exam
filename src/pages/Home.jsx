import React from "react";
import ListItems from "../components/listItems/ListItems";
import Custom from "../components/Custom";
import { useState } from "react";
const Home = () => {
  const [value, setValue] = useState(1);
  console.log(setValue);

  const add = (num) => {
    setValue(5 + num + value);
  };
  return (
    <div>
      <Custom func={add}>GO</Custom>
      <input type="text" value={value} />
      <ListItems />
    </div>
  );
};

export default Home;
