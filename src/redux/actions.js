
export const todoAdd = (todos) => {
    return {
        type: "TODO_ADD",
        payload: todos
    }
}

export const todoUpdate = (todos) => {
    return {
        type: "TODO_UPDATE",
        payload: todos
    }
}

export const todoDelete = (todoId) => {
    return {
        type: "TODO_DELETE",
        payload: todoId
    }
}