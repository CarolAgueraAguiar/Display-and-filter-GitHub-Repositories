import { useState } from "react"
import ContadorDisplay from "./components/ContadorDisplay";
export default function ContadorComponente() {
  const [numero, alterarNumero] = useState(0)

  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
    textAlign: "center",
    fontSize: "2rem"
  }
  const quandoClicaMais = () => alterarNumero(numero + 1);
  const quandoClicaMenos = () => alterarNumero(numero - 1);

  return (
    <div style={estilo}>
      <h1>Contador</h1>
      <ContadorDisplay numero={numero}/>
      <div style={{marginTop: "1rem"}}>
        <button onClick={quandoClicaMais} style={{padding:"1rem"}}>+</button>
        <button onClick={quandoClicaMenos} style={{padding:"1rem"}}>-</button>
      </div>
    </div>
  );
}