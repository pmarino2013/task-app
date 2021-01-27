import React, { useEffect, useState } from "react";
import TaskAdd from "./component/TaskAdd";
import TaskCount from "./component/TaskCount";
import TaskList from "./component/TaskList";

import moment from "moment";

// import "./css/estilo.css";
function App() {
  const icon = "📌";

  const [tarea, setTarea] = useState({
    item: "",
    done: false,
    inicio: "",
  });

  const [tasks, setTasks] = useState([]);

  const [count, setCount] = useState(0);

  //inicializamos la data de tareas
  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem("tasks")) || [];

    setTasks(storage);
  }, []);

  useEffect(() => {
    countPendientes();
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setTarea({
      item: e.target.value,
      done: false,
      inicio: moment().format("L"),
    });
  };
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      if (tarea.item !== "") {
        AddTask();
        setTarea({
          item: "",
          done: false,
        });
      }
    }
  };

  const AddTask = () => {
    setTasks([...tasks, tarea]);
  };

  const countPendientes = () => {
    let cantidad = tasks.filter((item) => {
      return item.done === false;
    });
    setCount(cantidad.length);
  };

  const eliminarHecho = () => {
    let tareasPendientes = tasks.filter((item) => item.done === false);

    setTasks(tareasPendientes);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col ">
          <div className="card mt-5">
            <div className="card-body">
              <h1 className="card-title text-center">{icon}Task App</h1>
              <div className="mt-3">
                <TaskAdd
                  tarea={tarea}
                  handleChange={handleChange}
                  handleEnter={handleEnter}
                />
              </div>
              <TaskCount
                count={count}
                tasks={tasks}
                eliminarHecho={eliminarHecho}
              />
            </div>
            <TaskList
              icon={icon}
              tasks={tasks}
              setTasks={setTasks}
              // countPendientes={countPendientes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
