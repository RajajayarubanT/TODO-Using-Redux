export const TodoReducer = (state = { todos: [] }, action) => {
    switch (action.type) {
        case "ADD":

            return { todos: action.payload }

        case "REMOVE":

            return { todos: action.payload }

        default:
            return state
    }
}