import { useState } from "react"
import { Header } from "./Components/Header";
import { Tasks } from "./Components/Tasks";

function App() {

  const [tasks,setTasks] = useState([
    {
        id: 3,
        text: 'food shopping',
        day: 'Feb 6th',
        reminder: true,
    },
    {
      id: 2,
      text: 'Couch Surfing',
      day: 'Feb 2th',
      reminder: false,
    },
    {
      id: 1,
      text: 'Do Nothing again',
      day: 'Feb 7th',
      reminder: true,
    },
    ])

  //Delete the task
  const deleteTask = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <Header />
      {/* <Button color={"hotpink"} text="Add"/> */}
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>

  );
}

export default App;
