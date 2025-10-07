import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from './TodoCard'

const TodoList = ({update, setUpdate, setupdatedTask}) => {
    const todos = useSelector(state => state.todos)
    console.log(todos)
  return (
    <div className='todolist'>
      {
        todos.map(todo =>
          <TodoCard todo = {todo}
          update = {update}
          setUpdate = {setUpdate}
          setupdatedTask = {setupdatedTask}
          />
        )
      }
    </div>
  )
}

export default TodoList