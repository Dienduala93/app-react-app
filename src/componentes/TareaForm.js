import React, {useState} from "react";

const TareaForm =(props) => {
const[inputText,setInputText]=useState("");
const [validacion,setValidacion] = useState(true);

const manejarFormulario = (event) => {
    let div= document.getElementById("error")
let regex=/^[a-zA-Z ]{0,25}$/
if(regex.test(event.target.value)){
    div.setAttribute("hidden",true) 
    setInputText(event.target.value);
}else{
 
  div.removeAttribute("hidden")  
 // div.innerText="Por favor añade Provincia por favor"
} 
    

}
 
const submit = (event) => {
event.preventDefault();
if(inputText.trim() !== ""){
props.nuevaTarea(inputText);
setInputText("");
setValidacion(true);
}
else {
    setValidacion(false);
}

}
    return(
        <div>
            <div className="row">
            <div className="col-md-2"></div>
               <div className="col-md-8">
               <form className="form-group mt-5 mb-5" onSubmit={submit}>
                <div className="input-group">
                  <input placeholder="Anadir Provincia" className="form-control" value={inputText} onChange={manejarFormulario }/>
                  <span className="input-group-btn">
                  <button className="btn btn-outline-success" >Añadir</button>
                  </span>
                </div>       
            </form>

               </div>
                
            </div>
            
            
            {!validacion &&  <div className="validacion"> Añada una Provincia,por favor </div>} 
          
            <div id="error" hidden></div>
        </div>
    )
}
export default TareaForm;