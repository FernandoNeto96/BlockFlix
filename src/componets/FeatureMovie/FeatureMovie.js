//import react from "react";
import './FeatureMovie.css'
import { Feactured, FeacturedButtons, FeacturedDescripition, FeacturedGenrs, FeacturedInfo, FeacturedName, FeacturedPoints, FeacturedSeasons, FeacturedVertical, FeacturedYear, FeaturedHorizontal } from "./FeatureStyle";
//import { feacturedName, featured, featuredHorizontal, featuredVertical } from "./style";
//import { } from "./styles";
const FeatureMovie = ({ item }) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return (<Feactured style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>

        <FeacturedVertical>
            <FeaturedHorizontal>
                <FeacturedName> {item.original_name} </ FeacturedName >
                <FeacturedInfo>

                    <FeacturedPoints>{item.vote_average} pontos </FeacturedPoints>
                    <FeacturedYear>{firstDate.getFullYear()}</FeacturedYear>
                    <FeacturedSeasons>
                        {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? "s" : " "}
                    </FeacturedSeasons>
                </FeacturedInfo>
                <FeacturedDescripition>{item.overview}</FeacturedDescripition>
                
                <FeacturedGenrs> <strong>Gêneros:</strong>{genres.join(', ')}</FeacturedGenrs>
            </FeaturedHorizontal>
        </FeacturedVertical>
    </Feactured>)
}


export default FeatureMovie