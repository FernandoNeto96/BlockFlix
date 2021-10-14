import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Feactured, FeacturedButtons, FeacturedDescripition, FeacturedGenrs, FeacturedInfo, FeacturedName, FeacturedPoints, FeacturedSeasons, FeacturedVertical, FeacturedYear, FeaturedHorizontal } from "../FeatureMovie/FeatureStyle";
import { useContext } from "react";
import { MyContext } from "../../Context/Context";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
//const url = `https://api.themoviedb.org/3/movie/$%7Bmovie_id%7D?api_key=ecf58c340cb08f900b6f61cc6817b112language=pt-BR`
//const API_KEY = 'ecf58c340cb08f900b6f61cc6817b112'
const basicAxios = async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ecf58c340cb08f900b6f61cc6817b112&language=pt-BR`)
    console.log(response.data);
    return response.data
}


const Product = ({ title, itens }) => {
    const History = useHistory() 
    const params = useParams()
    const id = params.id
    const [movie, setMovie] = useState([])
    let firstDate = new Date(movie.release_date);
    let genres = [];
    for (let i in movie.genres) {
        genres.push(movie.genres[i].name)
    }

    const{AtualizaCarrinho}=useContext(MyContext)
    

    useEffect(
        () => {
            (async () => {
                setMovie(await basicAxios(id))
            })()
        },[]
    )

    return (
        <>
        <Feactured style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
        }}>
             <FeacturedVertical>
              <FeaturedHorizontal>
                <FeacturedName> {movie.title} </ FeacturedName >
                <FeacturedInfo>

                    <FeacturedPoints>{movie.vote_average} pontos </FeacturedPoints>
                    <FeacturedYear>{firstDate.getFullYear()}</FeacturedYear>
                   

                    <FeacturedSeasons>
                        {movie.number_of_seasons||1} temporada{movie.number_of_seasons !== 1 ? "s" : " "}
                    </FeacturedSeasons>
                </FeacturedInfo>
                <FeacturedDescripition>{movie.overview}</FeacturedDescripition>
                <FeacturedButtons>
                    <button  className="feactured--watchbutton" onClick={()=>AtualizaCarrinho(movie)}>{"R$"+Number(movie.vote_average * 10).toFixed(2)}</button>
                    <button className="feactured--mylistbutton" onClick={()=> History.push("/carrinho")} > + Minha lista </button>
                </FeacturedButtons>
                <FeacturedGenrs> <strong>Gêneros:</strong>{genres.join(', ')}</FeacturedGenrs>
            </FeaturedHorizontal>
        </FeacturedVertical>
        </Feactured>
        </>
    )

}

export default Product