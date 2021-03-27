import React from 'react';
import TodoList from './components/todo-list';
import TodoInput from './components/todo-input';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));

  


const App = () => {
    const classes = useStyles();

    return ( 
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper className={classes.paper}>
            <TodoInput />
            <TodoList />
          </Paper>
        </Container>
      </React.Fragment>
     );
}
 
export default App;