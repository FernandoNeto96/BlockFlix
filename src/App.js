import './App.css';
import axios from "axios"
import {useEffect,useState} from "react"
import MovieRow from './componets/MovieRow/MovieRow';
import Tmdb from './Tmdb';
import {basicFech} from './Tmdb'
import FeatureMovie from './componets/FeatureMovie/FeatureMovie';






function App() {

const [movieList,setMovieList] = useState([])
const [movieListoriginal,setMovieListoriginal] = useState([])
const [feacturedData,setfeacturedData] = useState(null)
const [selectFilter,setSelectFilter] = useState('toprated')



const HandleCategories = async(event)=>{
event.preventDefault()
let list = await Tmdb.getHomeList()
  setMovieListoriginal(list.filter(i=>i.slug === selectFilter));


}


    useEffect(()=>{
     basicFech()
      
      },[])

useEffect(()=>{
const loadAll = async()=>{
let list = await Tmdb.getHomeList()
setMovieList(list);

let originals =list.filter(i=>i.slug === 'originals')
let randomChosen = Math.floor(Math.random() * (originals[0].itens.length-1))

let chosen = originals[0].itens[randomChosen]
 

 let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv')
 
 setfeacturedData(chosenInfo)
}

loadAll()
},[])

useEffect(()=>{
  const loadAll = async()=>{
  let list = await Tmdb.getHomeList()
  setMovieListoriginal(list.filter(i=>i.slug === 'toprated'));
  
  }
  
  loadAll()
  },[])



  return (
    
    <div className="page">
    {feacturedData && <FeatureMovie item={feacturedData}/>}
    
    <div className="selectGenre">
    <form onSubmit={HandleCategories}>
    <select name="select" value={selectFilter} onChange={opitions => setSelectFilter(opitions.target.value)}>
      {movieList.map((item)=>(  
        <option value={item.slug}>{item.title}</option>           
      ))}
      </select>
      <button type="submit">Pesquisar</button>
     </form>
     </div>

     
     <section className="lists2">
      {movieListoriginal.map((item,key)=>(
        <MovieRow key={key} title={item.title} itens={item.itens} />    
      ))}
     </section>
     

     <section className="lists">
      {movieList.map((item,key)=>(
        <MovieRow key={key} title={item.title} itens={item.itens} />    
      ))}
     </section>

    
    
    


    </div>
  );
}

export default App;
