import React, { useState } from "react";
import "./App.css";
import TareaForm from "./componentes/TareaForm";
import Tarea from "./componentes/Tarea";

function App() {
  const [listaTareas, setListaTareas] = useState([]);
var c=0;
  const nuevaTarea = (tareaNueva) => {
    setListaTareas([tareaNueva, ...listaTareas]);
  };
  const tabla = () =>{
return(
    <table className="table table-condensed">
          <thead>
            <tr>
              <th>Tareas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
          <Tarea listaTareas={listaTareas} setListaTareas={setListaTareas} />
          </tbody>
        </table>
)

  }

 
  



  return (
    <div className="App">
      <TareaForm nuevaTarea={nuevaTarea} />

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        {listaTareas.length===0 ? <h1 className="text-center">No hay provincia</h1> : tabla()}
        </div>
        
      </div>
    </div>
  );
}

export default App;
