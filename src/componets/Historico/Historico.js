import { React, useContext } from "react";
import { MyContext } from "../../Context/Context";
import {Details} from "./Historico.style";

export const Historico = () => {
    const { historico } = useContext(MyContext)
    


    if (historico === []) {
        return <p>Historico vazio</p>
    }


    return (
        <>
            
            {historico.map(historico => {
                console.log(historico)
                return (
                    <>
                    
                    <Details>
                        <summary>Pedido:{historico.numeroDoPedido}</summary>
                        <h2 className="element">Data: {historico.data}</h2> 
                        {historico.listaDeFilmes.map((element) => (
                            <h2 className="element">{element.title}</h2>
                        ))}
                        <h2 className="elementTotal">Total:R${Number(historico.totalCarrinho).toFixed(2)}</h2> 
                    </Details>
                   
                    </>
                )
            })}
        </>)
}