export const AddTodoList = (todo) => (dispatch, getState) => {
    const { Todo: { todos } } = getState()

    let hasTodo = todos.find(T => T.todo === todo)

    if (!hasTodo) {
        dispatch({
            type: "ADD",
            payload: [{ id: todo, todo: todo }, ...todos]
        })
    }
}
export const RemoveTodoList = (todo) => (dispatch, getState) => {
    const { Todo: { todos } } = getState()
    dispatch({
        type: 'REMOVE',
        payload: todos.filter(T => T.id !== todo)
    })
}