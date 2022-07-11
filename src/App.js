
import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'



function App() {
  const [showAddTask, setShowAddTask] = useState (false)

  const [tasks, setTasks] = useState([])
  
    //Add Task
    const addTask = (task) => {
      const id=Math.floor(Math.random()*10000)+1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
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
      <Header onAdd={() => setShowAddTask
      (!showAddTask)} showAdd={showAddTask}/> 
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?(
      <Tasks tasks = {tasks} onDelete={deleteTask} onToggle = {toggleReminder}/>)
      : ( 'No task to show')}
    </div>
  );
}


export default App
 