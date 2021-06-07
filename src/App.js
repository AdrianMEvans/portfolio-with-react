import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import '@fontsource/roboto'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { orange, green, teal, amber, pink, purple  } from '@material-ui/core/colors';

// const useStyles = makeStyles({
//   root: {
//     border
//   }
// })

const theme = createMuiTheme ({
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
      <div className="App">
        <header className="App-header">
          <Typography variant="h2">
            Welcome to MUI
        </Typography>
          <Typography variant="subtitle1">
            Learning how to use Material UI.
        </Typography>
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
    </ThemeProvider>
  );
}

export default App;
