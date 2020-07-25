import React from 'react';
import Dashboard from "../src/components/Dashboard/Dashboard";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Switch from "@material-ui/core/Switch";
import useDarkMode from "./hooks/useDarkMode";
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1em'
  }
}));

const App = () => {
  const classes = useStyles();

  const {theme, isSecondaryThemeActive, switchTheme} = useDarkMode(true)

  const handleThemeChange = () => switchTheme();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Grid
          container
          className={classes.root}
        >
          <Grid item xs={12} md={12} lg={12}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Typography variant="h6" display="inline"> Rick and morty app </Typography>
              <Switch checked={isSecondaryThemeActive} onChange={handleThemeChange}/>
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
