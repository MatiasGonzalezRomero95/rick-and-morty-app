import React from 'react';
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import DarkModeToggle from 'react-dark-mode-toggle';
import Dashboard from "components/Dashboard/Dashboard";
import useDarkMode from "hooks/useDarkMode";
import './App.css';
const useStyles = makeStyles(theme => ({
  container: {
    padding: '1em'
  }
}));

const App = () => {
  const classes = useStyles();
  const {theme, isDarkModeActive, switchTheme} = useDarkMode(false)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Grid
          container
          className={classes.container}
        >
          <Grid item xs={12} md={12} lg={12}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Typography
                variant="h6"
                display="inline"
              >
                Rick and morty app
              </Typography>
              <DarkModeToggle
                onChange={switchTheme}
                checked={isDarkModeActive}
                size={50}
                speed={1.5}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Dashboard/>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
