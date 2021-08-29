import { createTheme } from "@material-ui/core";
import { cyan, teal } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: cyan,
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff',
    },
  },
})
export default theme