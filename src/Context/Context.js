import React, { useEffect, useState } from "react";


export const MyContext = React.createContext({
    user: null,
    moviesOnCart: [],
    moviesOnWishList: [],
    moviesOnHistory: []
});

export function MyProvider({ children }) {
    const [carrinho, setCarrinho] = useState(localStorage.carrinho===undefined?[]:JSON.parse(localStorage.getItem("carrinho")))
    const [historico, setHistorico] = useState(localStorage.historico===undefined?[]:JSON.parse(localStorage.getItem("historico")))
    const [usuario, setUsuario] = useState([])
    const [autenticado, setAutenticado] = useState(false)
    

    const myLogin = (data) => {
        setUsuario(data)
        
    }
    
    const RemoverItem = (data) =>{
        setCarrinho((prevState) => {
            localStorage.setItem("carrinho", JSON.stringify(prevState.filter((element) => element.id !== data.id)))
            return prevState.filter((element) => element.id !== data.id);
        }
)
    }

    const FinalizarCompra = ()=>{
        const numeroDoPedido = parseInt(Math.random()*10000)
        const historicoCompras = localStorage.historico===undefined?[]:JSON.parse(localStorage.getItem("historico"))
        const now = new Date()
        const data =  `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
        let valorTotal = 0
            carrinho.forEach(element => {
                valorTotal += Number(element.vote_average) * 10
            });
        
            historicoCompras.push({
                numeroDoPedido:numeroDoPedido,
                listaDeFilmes:carrinho,
                totalCarrinho: valorTotal,
                data:data,
            })
        localStorage.setItem("historico",JSON.stringify(historicoCompras))
        localStorage.setItem("carrinho","[]")
        setHistorico(historicoCompras)
        setCarrinho([])
    }


    const AtualizaCarrinho = (data) => {
        setCarrinho(prevState => {
            if (prevState.find((movie) => movie.id === data.id)) {
                return prevState
            };
            localStorage.setItem("carrinho",JSON.stringify(prevState.concat(data)))
            return prevState.concat(data)
        }
        )

        
    }


            return (<MyContext.Provider value={{ carrinho, historico, usuario, autenticado, myLogin, AtualizaCarrinho,RemoverItem,setCarrinho,setHistorico,FinalizarCompra}}
    >
        {children}
    </MyContext.Provider>
    )
}


