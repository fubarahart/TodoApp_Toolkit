import React from 'react'

const TodoForm = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", padding: "20%", flexDirection: "column"}}>
        <h1 style={{textAlign: "center"}}>Add Task</h1>
        <form action="" className='form'>
            <label htmlFor="">Task</label>
            <input type="text" placeholder='enter a task name' />
            <label htmlFor="">Time</label>
            <input type="time" placeholder='Schedule Time' />
            <button style={{width: '20%'}}>Submit</button>
        </form>
    </div>
  )
}

export default TodoForm