import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import '@fontsource/roboto'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { orange, green, teal, amber, pink, purple } from '@material-ui/core/colors';

// const useStyles = makeStyles({
//   root: {
//     border
//   }
// })

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
    }
  },
  palette: {
    primary: {
      main: purple[400],
    },
    secondary: {
      main: teal[400],
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="App">
          <header className="App-header">
            <Typography variant="h2" component="div">
              Welcome to MUI
        </Typography>
            <Typography variant="subtitle1">
              Learning how to use Material UI.
        </Typography>
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
  );
}

export default App;
