import React from "react";

export default function TaskCount({ count, tasks, eliminarHecho }) {
  return (
    <div className="text-center">
      <span>
        Tareas Pendientes <b>{count}</b> de <b>{tasks.length}</b>
      </span>
      <button className="btn btn-danger pt-0 ml-3" onClick={eliminarHecho}>
        x
      </button>
    </div>
  );
}
