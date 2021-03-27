import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { todoAdd } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';

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


const TodoInput = () => {
    const classes = useStyles();
    const [title, setTitle] = useState('');

     const dispatch = useDispatch();

    return ( 

    <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
             <TextField id="standard-basic" label="Todo Input" variant="outlined" fullWidth
              onChange={(e) => setTitle(e.target.value)}
              value={title}
             />
          </Grid>
          <Grid item xs={4}>
              <Button color="primary" variant="contained" size="large" 
              onClick={() => dispatch(todoAdd(

                {
                  id: uuid(),
                  name: title
                }
              )) }
              >Add</Button>
             </Grid>
          </Grid>
    </div>

     );
}
 
export default TodoInput;