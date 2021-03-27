import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './todo-item';



const TodoList = () => {
 const todos = useSelector(state => state);

    return ( 
            <Fragment>
               {
                   todos.map((todo, i) => (
                       <TodoItem key={todo.id} todo={todo}/>
                   ))
               }                 

            </Fragment>
        );
}
 
export default TodoList;