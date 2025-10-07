import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask, editTask } from '../redux/TodoSlice'

const TodoForm = ({update, setupdate, updatedTask}) => {
  const [task, setTask] = useState("")
  const [time, setTime] = useState("")
  const dispatch = useDispatch()

  const handlesubmit = (e) => {
    e.preventDefault()
    if (update) {
      dispatch(editTask({id: updatedTask.id, data:{...updatedTask, task, time,}}))
    }
    else{
      dispatch(addTask({task, time, iscomplete: false, id:Math.random()}))
    }
    
  }

  return (
    <div style={{display: "flex", justifyContent: "center", padding: "20%", flexDirection: "column"}}>
        <h1 style={{textAlign: "center"}}>Add Task</h1>
        <form action="" className='form'>
            <label htmlFor="">Task</label>
            <input 
            defaultValue={updatedTask?.task}
            onChange={(e) => setTask(e.target.value)} type="text" placeholder='enter a task name' />
            <label htmlFor="">Time</label>
            <input 
            defaultValue={updatedTask?.time}
             onChange={(e) => setTime(e.target.value)} type="text" placeholder='Schedule Time' />
            <button onClick={handlesubmit} style={{width: '20%'}}>Submit</button>
        </form>
    </div>
  )
}

export default TodoForm