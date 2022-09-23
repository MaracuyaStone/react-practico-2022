import { useState, useEffect } from "react"
import Grid from "./Grid"
import "./App.css"

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  
  const [criptos, setCriptos] = useState()
  

  useEffect(() => {
    fetch(`${API_URL}assets`)
      .then((resp) => resp.json())
      .then((data) => {
        setCriptos(data.data)
        setidCripto(data.data.id)
      })
      .catch(() => {
        console.error("la petición fallo")
      })
  }, [])

  

  if(!criptos) return <span>Cargando...</span>
  
  return (
    <>
      <h1 className="h1">Lista de criptomonedas</h1>
      <div className="gridContainer">
        { criptos.map(( { id, name, priceUsd, changePercent24Hr } ) => (
          
            <Grid id={id} 
              name={name} 
              priceUsd={priceUsd} 
              changePercent24Hr={changePercent24Hr} 
            />
          
        )) }
      </div>
    </>
    
  )
}

export default App
