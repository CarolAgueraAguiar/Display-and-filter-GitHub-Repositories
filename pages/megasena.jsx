import { useState } from "react";
import { mega } from "../functions/mega";
import ContadorDisplay from "./components/ContadorDisplay";

export default function megasena(){
  const [numeros, setNumeros ] = useState(mega()) 
  function renderNumeros() {
    return numeros.map(
      numero => <ContadorDisplay key={numero} numero={numero}/>
    )
  }
  return(
    <div>
      <h1 style={{textAlign: "center", marginTop: "5rem",marginBottom: "5rem"}}>Mega Sena</h1>
      <div style={{display: "flex", justifyContent: "center"}}>
        {renderNumeros()}
      </div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "5rem"}}>
        <button onClick={() => setNumeros(mega())} style={{padding: "20px", backgroundColor:"green", borderRadius: "10px"}}>
          <h1>Gerar Aposta</h1>
        </button>
      </div>
    </div>
  )
}