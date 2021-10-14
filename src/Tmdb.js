import axios from "axios"

const API_KEY = 'ecf58c340cb08f900b6f61cc6817b112'
const API_BASE = 'https://api.themoviedb.org/3'


export const basicFech = async (endpoint) => {
    const response = await axios.get(`${API_BASE}${endpoint}`)
    return response.data.results
}

export const basicInfo = async (endpoint) => {
    const response = await axios.get(`${API_BASE}${endpoint}`)
    return response.data
}



const Tmdb = {
    getHomeList: async () => {
        return [
          
            {
                slug: 'trending',
                title: 'Recomendados',
                itens: await basicFech(`/discover/movie?sort_by=popularity.desc&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                itens: await basicFech(`/discover/movie?witch_genges=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                itens: await basicFech(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'bests',
                title: 'Melhor classificação',
                itens: await basicFech(`/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                itens: await basicFech(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            }
        ];

    },

    
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicInfo(`/movie/${movieId}?&language=pt-BR&api_key=${API_KEY}`)
                    console.log("movie")
                    break;
                case 'tv':
                    info = await basicInfo(`/tv/${movieId}?&language=pt-BR&api_key=${API_KEY}`)
                    console.log(movieId)
                    break;
                default:
                    info = null;
                    console.log("info")
                    break;
            }


        }
        return info
    }
}

export default Tmdb;