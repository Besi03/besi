
import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

function App() {
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
  
    //Add Task
    const addTask = (task) => {
      console.log(task);
    }
    //delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !==id))
    }

    const toggleReminder = (id) => {
      setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder: !task.reminder} : task))
    }

  return (
    <div className="container">
      <Header emri='Task Tracker' /> 
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?(
      <Tasks tasks = {tasks} onDelete={deleteTask} onToggle = {toggleReminder}/>)
      : ( 'No task to show')}
    </div>
  );
}


export default App
 