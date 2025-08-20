import React from 'react'

const TodoCard = ({todo}) => {
  return (
    <div className='todocard' style={{backgroundColor: todo.isCompleted ? 'lightgreen' : 'lightcoral'}}>
        <h1>{todo.task}</h1>
        <h2>{todo.time}</h2>
    </div>
  )
}

export default TodoCard 