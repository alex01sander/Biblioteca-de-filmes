import {useState} from 'react'
import {useParams} from 'react-router-dom'

import './Movies.css'

import MovieCard from '../components/movie/movie-card.components'
import { useEffect } from 'react';
import {BiMoviePlay, BiCameraMovie, BiTime} from 'react-icons/bi'
import {MdDescription} from 'react-icons/md'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Movies = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  
  const getMovie = async(url) => {
    const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
  }

 
  const formatCurrency = (number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`

    getMovie(movieUrl)
  })
  return (
     <div className='movie-page'>
        {movie && (
          <>
            <MovieCard movie={movie} showLink={false}/>
            <p className='tagline'>{movie.tagline}</p>
            <div className='info'>
              <h3>
             <BiMoviePlay/> Orçamento:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className='info'>
              <h3>
             <BiCameraMovie/> Receita:
              </h3>
                <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className='info'>
              <h3>
             <BiTime/> Duração:
              </h3>
                <p>{movie.runtime} Minutos</p>
            </div>
            <div className='info description'>
              <h3>
             <MdDescription/> Descrição:
              </h3>
                <p>{movie.overview}</p>
            </div>
          </>
        )}
     </div>
  )
}

export default Movies