import React from "react";
import moment from "moment";

export default function TaskList({ icon, tasks, setTasks }) {
  const iconX = "✔";
  const hoy = moment().format("L");

  const verClic = (index) => {
    let tarea = tasks[index].item;
    let hecho = {
      item: tasks[index].item,
      done: !tasks[index].done,
      inicio: tasks[index].inicio,
    };

    let newarray = tasks.filter((dato) => dato.item !== tarea);

    if (hecho.done === true) {
      newarray.push(hecho);
    } else {
      newarray.unshift(hecho);
    }

    setTasks(newarray);
  };

  return (
    <div>
      <ul className="list-group list-group-flush">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={
              moment(task.inicio).isBefore(hoy)
                ? "list-group-item bg-warning text-dark"
                : "list-group-item k"
            }
            onClick={() => verClic(index)}
          >
            {task.done ? iconX : icon}
            <span className={task.done ? "hecho-true" : ""}> {task.item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
