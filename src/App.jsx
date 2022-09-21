import { useState, useEffect } from "react"

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()

  useEffect(() => {
    fetch(`${API_URL}assets`)
      .then((resp) => resp.json())
      .then((data) => {
        setCriptos(data.data)
      })
      .catch(() => {
        console.error("la petición fallo")
      })
  }, [])

  if(!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        { criptos.map(( { id, name, priceUsd, changePercent24Hr } ) => (
          <>
            <li key={id}>
              Nombre: {name} Precio: {priceUsd} Variación%: {changePercent24Hr}
            </li>
          </>
          
        )) }
      </ol>
    </>
    
  )
}

export default App
