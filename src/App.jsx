import { useState, useEffect } from "react"

function App() {

  const [criptos, setCriptos] = useState()

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
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
        { criptos.map(cripto => (
          <>
            <li>
              <p>
                
                  Nombre: ${cripto.name} 
                  Precio $USD: ${cripto.priceUsd} 
                  % variation: ${cripto.changePercent24Hr}
                
              </p>
            </li>
          </>
          
        )) }
      </ol>
    </>
    
  )
}

export default App
