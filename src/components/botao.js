import React from "react"; 
import App from "../App";
import "./botao.css"
import { useState } from 'react';

const Botao = () => {

const [valor, setValor] = useState(0)

return (
    <>
        <h1>{valor}</h1>
        <div>
        <button className="botao" onClick={() => setValor(valor + 1)} type="button"></button> 
        <button className="botao" onClick={() => setValor(valor - 1)} type="button"></button>
        </div>
    </>

)

}

export default Botao;