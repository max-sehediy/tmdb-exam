import Navbar from "./components/Navbar";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#dfe6e9'
  }
}))

function App() {
  
  const classes = useStyles()
  return (
    <BrowserRouter>
      <Navbar />
      <div className={classes.root} >
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
