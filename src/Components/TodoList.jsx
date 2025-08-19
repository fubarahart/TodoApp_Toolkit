import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector(state => console.log(state))
  return (
    <div>TodoList Malfunctioning</div>
  )
}

export default TodoList