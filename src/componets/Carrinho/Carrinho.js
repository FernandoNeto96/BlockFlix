import { useContext, useEffect, useState } from "react"
import { MyContext } from "../../Context/Context"


export default function Carrinho() {
    const { carrinho, RemoverItem,FinalizarCompra } = useContext(MyContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(() => {
            let valorTotal = 0
            carrinho.forEach(element => {
                valorTotal += Number(element.vote_average) * 10
            });
            return valorTotal
        }

        )
    }, [carrinho])

   

    if(total===0){
        return "Lista vazia"
    }
    return (
        <>
            {carrinho.map(movie => {
                return (
                   
                    <div style={{display:"flex", justifyContent:"space-between", width: "300px",
                    height: "50px"
                    }}>
                    <p>{movie.title}</p>
                    <p>{"R$"+Number(movie.vote_average * 10).toFixed(2)}</p>
                    <button onClick={() => RemoverItem(movie)}>remover</button>
                    </div>
                  
                   
                )
      }) 

        }

            <p>{total===0?"Lista Vazia":"TOTAL: R$"+total.toFixed(2)}</p>
            <button onClick={FinalizarCompra} >Finalizar Compra</button>
        </>
    )
}