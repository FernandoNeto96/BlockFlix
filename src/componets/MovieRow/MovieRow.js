import React, { useState,useContext } from "react";
//import './MovieRow.css'
import { MovieRowDiv, MovieRowLeft, MovieRowListarea, MovieRowRingth, MovieRowCard, MovieRowList, MovieRowItem, MovieRowLegend } from "./MovieRowStyle";
import { useHistory } from "react-router";
import { MyContext } from "../../Context/Context";

//import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
//import NavigateNextIcon from '@mui/icons-material/NavigateNext';
//import { NavigateNextIcon, NavigateBeforeIcon } from '@material-ui/icons';

const MovieRow = ({ title, itens }) => {
    const [scrollX, setscrollX] = useState(-400)
    const{AtualizaCarrinho}=useContext(MyContext)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0
        }
        setscrollX(x)
    }

    const handringthtArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = itens.length * 150
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setscrollX(x)
    }


const history = useHistory()

const details = (id) =>{
    history.push(`/movies/${id}`)
}

    return (
        <MovieRowDiv>  
            <h2>{title}</h2>
            <MovieRowLeft onClick={handleLeftArrow}>
                <p style={{ fontSize: 50 }}>{"<"}</p>
            </ MovieRowLeft>
            <MovieRowRingth onClick={handringthtArrow}>
                <p style={{ fontSize: 50 }}>{">"}</p>
            </MovieRowRingth>

            <MovieRowListarea> 
            
                
                <MovieRowList style={{ marginLeft: scrollX, width: itens.length * 150 }}>
                    
                        {itens.length > 0 && itens.map((item) => (
                            
                           <MovieRowItem key={item.id}> 
                           <MovieRowCard>
                                <img onClick={()=>details(item.id)} alt={item.original_title || item.original_name} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                               <MovieRowLegend> 
                                    <p onClick={()=>details(item.id)} >{item.title || item.original_name}</p>
                                    </MovieRowLegend>
                               <button onClick={()=>AtualizaCarrinho(item)}>{"R$"+Number(item.vote_average * 10).toFixed(2)}</button>
                               </MovieRowCard>
                               </MovieRowItem>
                               
                        ))}
                 
                    </MovieRowList>
                
            </MovieRowListarea> 

        </MovieRowDiv>
    )

}

export default MovieRow