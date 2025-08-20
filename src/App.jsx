//Video 080

import { useState } from 'react'

import './App.css'
import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoForm />
    <TodoList />
    </>
  )
}

export default App
