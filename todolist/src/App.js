import React, { useState } from "react";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar desenvolvimento web",
      completed: false
    },
    {
      id: 2,
      title: "Almoçar",
      completed: false
    },
    {
      id: 3,
      title: "Dormir",
      completed: false
    }
  ]);

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks}/>
      </div>
    </>
  );
}

export default App;
