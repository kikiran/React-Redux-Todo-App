import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Button, Paper, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { todoDelete, todoUpdate } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  btnDiv: {
   margin: "10px"
  }
}));


const TodoItem = ({todo}) => {
    const classes = useStyles();
    let dispatch = useDispatch()
    const [name, setName] = useState(todo.name);
    const [editable, setEditable] = useState(false);

    return (  
        <div className={classes.root}>
  
      <Grid container spacing={3}>
        <Grid item xs>
          {todo.id.length > 1 ? todo.id[2] : todo.id}
        </Grid>
        <Grid item xs={4}>
          {
            editable ? <TextField placeholder={todo.name} value={name} 
            
            onChange={
              (e) => setName(e.target.value)
            }
            /> : <h4>{todo.name}</h4>
          }
        </Grid>
        <Grid item xs={5} >
          <Button className={classes.btnDiv} color="primary" variant="contained" size="small" onClick={() => {
            dispatch(todoUpdate(
             {  
                ...todo,
              name: name
            }
            ));

            if(editable) {
              setName(todo.name)

            };

            setEditable(!editable);

          }
        }
            >{editable ? "Update" : "Edit"}</Button>
          <Button color="secondary" variant="contained" size="small" onClick={() => dispatch(todoDelete(todo.id))}>Delete</Button>
        </Grid>
      </Grid>
    </div>

    );
}
 
export default TodoItem;