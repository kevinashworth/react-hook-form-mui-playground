import { createTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import indigo from "@material-ui/core/colors/indigo";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: indigo[600],
    },
  },
  typography: {
    h1: {
      fontSize: 48,
      fontWeight: 500,
      letterSpacing: -2,
    },
    h2: {
      fontSize: 48,
      fontWeight: 400,
    },
  },
});

export default theme;
