import React from "react";

export default function TaskList({ icon, tasks, setTasks }) {
  const iconX = "✔";

  const verClic = (index) => {
    let tarea = tasks[index].item;
    let hecho = {
      item: tasks[index].item,
      done: !tasks[index].done,
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
            className="list-group-item"
            onClick={() => verClic(index)}
          >
            {task.done ? iconX : icon}
            <span className={task.done ? "hecho-true" : ""}>{task.item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
