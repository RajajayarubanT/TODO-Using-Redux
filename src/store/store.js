import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { TodoReducer } from '../reducers/TodoReducers'

const reducer = combineReducers({
    Todo: TodoReducer
})

const middleware = [thunk]

const initialState = {}

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;