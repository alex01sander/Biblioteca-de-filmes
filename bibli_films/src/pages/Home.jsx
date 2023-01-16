import { useState, useEffect } from "react"
import MovieCard from "../components/movie/movie-card.components";
import './home.css'
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {
    const [topMovies, setTopMovies] = useState([]);
  
    const getTopRatedMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
        console.log(topRatedUrl);
        getTopRatedMovies(topRatedUrl);
      }, []);
    

    console.log(topMovies)
    return (
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies-container">
            {topMovies.length > 0 && topMovies.map((movie) => 
                <MovieCard movie={movie} key={movie.id}/>
            )}
            </div>
            
        </div>
        )
}

export default Home