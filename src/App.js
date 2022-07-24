import React, { useState } from 'react'
import './App.css';
import { AddTodoList, RemoveTodoList } from './actions/TodoAction';
import { useDispatch, useSelector } from 'react-redux'



const App = () => {
  const [todo, setTodo] = useState()

  const dispatch = useDispatch()
  const store = useSelector(s => s.Todo)

  const { todos } = store

  const addHandler = (e) => {
    e.preventDefault()
    dispatch(AddTodoList(todo))
  }

  const deleteHandler = (t) => {
    dispatch(RemoveTodoList(t))
  }

  return (
    <div className="App">
      <h1>TODO APPLICATION</h1>

      <form onSubmit={addHandler}>
        <input
          type="text"
          placeholder='Add task here...'
          style={{
            marginTop: '5rem',
            width: '250px',
            padding: '3px 3px 3px 10px',
            fontSize: '18px',
            outline: 'none',
            borderRadius: '15px',
          }}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button
          id="name"
          style={{
            cursor: 'pointer',
            marginLeft: '1rem',
            padding: '10px',
            borderRadius: '5px',
            background: 'green',
            border: 'none',
            color: '#fff'
          }}
        >
          GO
        </button>
      </form>

      <ul style={{
        width: '300px',
        marginTop: '2em',
      }}>

        {
          todos && todos.map(T => (
            <li key={T.id} style={{
              marginTop: '1em',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              background: '#005A99',
              padding: '10px',
              borderRadius: '5px'
            }}>
              <span>{T.todo}</span>
              <strong
                style={{ color: 'red' }}
                onClick={() => deleteHandler(T.todo)}
              >Delete</strong>
            </li>
          ))
        }

      </ul>
    </div>
  );
}

export default App;
