import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from './TodoCard'

const TodoList = () => {
    const todos = useSelector(state => state.todos)
    console.log(todos)
  return (
    <div className='todolist'>
      {
        todos.map(todo =>
          <TodoCard todo = {todo}/>
        )
      }
    </div>
  )
}

export default TodoList