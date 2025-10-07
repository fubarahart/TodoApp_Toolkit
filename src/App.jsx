//Video 080

import { useState } from 'react'

import './App.css'
import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm'

function App() {
  const [update, setUpdate] = useState(false)
  const [updatedTask, setupdatedTask] = useState({})
  console.log (updatedTask)

  return (
    <>
    <TodoForm update = {update} setUpdate={setUpdate} updatedTask = {updatedTask} />
    <TodoList update = {update} setUpdate={setUpdate} setupdatedTask = {setupdatedTask} />
    </>
  )
}

export default App
