import React from 'react';
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Switch from "@material-ui/core/Switch";
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";

import Dashboard from "components/Dashboard/Dashboard";
import useDarkMode from "hooks/useDarkMode";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1em'
  }
}));

const App = () => {
  const classes = useStyles();
  const {theme, isSecondaryThemeActive, switchTheme} = useDarkMode(true)

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
              <Switch checked={isSecondaryThemeActive} onChange={switchTheme}/>
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
