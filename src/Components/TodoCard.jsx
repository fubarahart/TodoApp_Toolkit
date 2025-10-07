import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/TodoSlice'

const TodoCard = ({todo, update,setUpdate, setupdatedTask}) => {
  const dispatch = useDispatch()
  return (
    <div className='todocard' style={{backgroundColor: todo.isCompleted ? 'lightgreen' : 'lightcoral'}}>
        <h1>{todo.task}</h1>
        <h2>{todo.time}</h2>
        <button onClick={() => dispatch(deleteTask(todo.id))}>Delete</button>
        <button onClick ={() => {setUpdate (true); setupdatedTask (todo)}}>Edit</button>
    </div>
  )
}

export default TodoCard 