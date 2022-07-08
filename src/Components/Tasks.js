import { useState } from 'react'


const Tasks = () => {
    const [tasks, setTasks] = useState([{
        id:1,
        text: 'Doc Ap',
        day: 'Feb 5th at 2',
        reminder: true,
    },
    {id:2,
        text: 'Meet',
        day: 'Feb 6th at 3',
        reminder: true,},
        {id:3,
            text: 'Shop',
            day: 'Feb 7th at 3',
            reminder: false,
        }])

  return (
    <>
        {tasks.map((task) =>(<h3 key={task.id}>{task.text}</h3>))} 
    </>
  )
}

export default Tasks