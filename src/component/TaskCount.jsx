import React from "react";

export default function TaskCount({ count, tasks, eliminarHecho }) {
  return (
    <div className="text-center">
      <span>
        Tareas Pendientes {count} de {tasks.length}
      </span>
      <button className="btn btn-danger pt-0 ml-3" onClick={eliminarHecho}>
        x
      </button>
    </div>
  );
}
