import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './assets/Navbar'
import tasks from './assets/tasks'
import NewTask from './assets/NewTask'

function App() {
  const [tasks, setTasks] = useState({});
    JSON.parse(localStorage.getItem('tasks'))

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
    <Navbar />
    <NewTask setTasks={setTasks} />
    <Tasks tasks={tasks} /> 

      </>
  )
}

export default App
