import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import '@fontsource/roboto';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';



import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { orange, green, teal, amber, pink, purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
    }
  }
})


function App() {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <div className="App">
            <header className="App-header">
              <AppBar position="static">
                <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                    MUI Themeing
          </Typography>
                  <Button color="inherit">Login</Button>
                </Toolbar>
              </AppBar>
              <Typography variant="h2" component="div">
                Welcome to MUI
        </Typography>
              <Typography variant="subtitle1">
                Learning how to use Material UI.
        </Typography>
        <div className="content">
          <Switch>
            <Route path="/">
            </Route>
          </Switch>
        </div>
              <Grid container spacing={15} justify="center" margin={10} >
                <Grid item xs={12} sm={6} lg={4}>
                  <Paper style={{ height: 75, width: '100%', }} />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Paper style={{ height: 75, width: '100%', }} />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Paper style={{ height: 75, width: '100%', }} />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Paper style={{ height: 75, width: '100%', }} />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Paper style={{ height: 75, width: '100%', }} />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Paper style={{ height: 75, width: '100%', }} />
                </Grid>
              </Grid>
              <ButtonGroup variant="contained">
                <Button
                  startIcon={<SaveIcon />}
                  href="#"
                  style={{
                    fontSize: 20
                  }}
                  variant="contained"
                  color="primary">
                  Save
        </Button>
                <Button
                  startIcon={<DeleteIcon />}
                  href="#"
                  style={{
                    fontSize: 20
                  }}
                  variant="contained"
                  color="secondary">
                  Delete
        </Button>
              </ButtonGroup>
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;