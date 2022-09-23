import { createElement } from "react"
import "./Grid.css"

const Grid = ({id, name, priceUsd, changePercent24Hr}) => {

    const API_LOGO_URL = import.meta.env.VITE_API_LOGO
    const URL = `${API_LOGO_URL}${id}`


    return (
        <ul className="div2">
            <div className="CriptoDiv">
                <img src={`${URL}`} height="150px" className="criptoImg"/>
                <p className="criptoText">
                    Criptomoneda: {name} <br />
                    Precio: {priceUsd} <br />
                    Variación: {changePercent24Hr}
                </p>
            </div>
        </ul>
    )
    
}

export default Grid