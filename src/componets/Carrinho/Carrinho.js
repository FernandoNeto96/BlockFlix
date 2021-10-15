import { useContext, useEffect, useState } from "react"
import { MyContext } from "../../Context/Context"
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export default function Carrinho() {
    const { carrinho, RemoverItem, FinalizarCompra } = useContext(MyContext)
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



    if (total === 0) {
        return "Lista vazia"
    }
    return (
        <>
        <Container maxWidth="lg" >
            <h1>Carrinho de Compras:</h1>
            <Box
                sx={{

                    
                    '& > :not(style)': {
                        m: 1,
                        width: 600,
                        height: 100,
                        marginTop: "10px" 
                    },
                }} >
                {carrinho.map(movie => {
                    return (
                        <>

                            <Paper elevation={3} >
                                <div style={{
                                    display: "flex", justifyContent: "space-around",
                                    height: "50px"
                                }}>
                                   
                                    <p>{movie.title}</p>
                                    <p>{"R$" + Number(movie.vote_average * 10).toFixed(2)}</p>
                                    <Button variant="contained"  onClick={() => RemoverItem(movie)}>remover</Button>
                                </div>
                            </Paper>



                        </>
                    )

                })
                }
                 <h2>{total === 0 ? "Lista Vazia" : "TOTAL: R$" + total.toFixed(2)}</h2>
           
</Box>

<Button variant="contained" onClick={FinalizarCompra} >Finalizar Compra</Button>
</Container>

        </>
    )
}