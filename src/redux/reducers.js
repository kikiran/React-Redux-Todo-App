import {todos} from './state';

export const reducer = (state = todos, action) => {
    let addNewTodos;
    switch(action.type) {
        case  "TODO_ADD": 
         addNewTodos = [...state];
        addNewTodos.push(action.payload);
        return addNewTodos;
        break;

        case  "TODO_UPDATE": 
        addNewTodos = [...state];
        let index = -1;
        for(let i=0; i< addNewTodos.length; i++){
            index++;

            if(addNewTodos[i].id == action.payload.id) {
                break;
            }
        }
        if(index != -1) {
            addNewTodos[index] = action.payload;
            return addNewTodos;
        }
        

        case  "TODO_DELETE": 
             addNewTodos = [...state];
            addNewTodos = addNewTodos.filter(todo => todo.id != action.payload)
        return addNewTodos
        break;

        default: return state;
    }

}