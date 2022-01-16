import React from "react";

//
const Tarea = ({listaTareas,setListaTareas}) => {
    const borrar=(id)=>{
     const listaFiltrada=listaTareas.filter((index)=> index !==id);
    setListaTareas(listaFiltrada);
}

const editar=(inputEditar,btnGuadar,parProv)=>{
let input=document.getElementById(inputEditar),
button=document.getElementById(btnGuadar),
paragrafo=document.getElementById(parProv);
input.removeAttribute("hidden")
button.removeAttribute("hidden")
paragrafo.setAttribute("hidden",true)   
}
const guardarEditacion=(inputEditar,btnGuadar,parProv)=>{
    let input=document.getElementById(inputEditar),
    button=document.getElementById(btnGuadar),
    paragrafo=document.getElementById(parProv);
    input.setAttribute("hidden",true) 
    button.setAttribute("hidden",true)
    paragrafo.removeAttribute("hidden")
    const novaLista=listaTareas.map(valor=>{
        if(valor===paragrafo.innerText){
           return input.value; 
        }
        return valor
    })
    setListaTareas(novaLista)
}

  return (
    <React.Fragment>
        { 
            listaTareas.map((e) => (
                <tr key={e}>
                <td scope="row"> <p id={e+1}>{e}</p>
                <input id={e+2} className="form-control" defaultValue={e} hidden/>
                </td>
         <td>
        <span className="btn btn-danger mr-1" onClick={()=>borrar(e)}><i className="fa fa-trash-o"></i></span>
                <span className="btn btn-warning mr-1" onClick={()=>editar((e+2),(e+3),(e+1))}><i className="fa fa-edit" ></i></span>
                <span id={e+3} className="btn btn-primary"onClick={()=>guardarEditacion((e+2),(e+3),(e+1))} hidden><i className="fa fa-floppy-o" ></i></span>
                </td>
            </tr>
             
           ))}
                 
    </React.Fragment>
  );
};

export default Tarea;
