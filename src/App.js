import React from "react";

import "./css/estilo.css";
function App() {
  const icon = "📌";

  return (
    <div className="container">
      <div className="row">
        <div className="col ">
          <div className="card mt-5">
            <div className="card-body">
              <h1 className="card-title text-center">{icon}Task App</h1>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{icon}Sacar la basura</li>
              <li className="list-group-item">{icon}Pasear al Perro</li>
              <li className="list-group-item">{icon}Acostarse temprano</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
