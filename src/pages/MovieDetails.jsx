import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {motion} from 'framer-motion'

function MovieDetails() {
  let params = useParams()
  let movId = parseInt(params.movieId)
  
  const [movie, setMovie] = useState([])
  const [genre, setGenre] = useState([])

  useEffect( () => {
    const searchMovie = async (id) => {
      const response =  await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=84a074e905a08c91f14ba891ba4e57bc&language=en-US`)
      const data =  await response.json()
      setMovie(data)
      setGenre(data.genres)
    }
    searchMovie(movId)
  },[movId])
  

  return (
    <motion.div animate={{x:[-150, 0]}} className='details-container'>
      <div className="left-details">
        <img src={movie.backdrop_path === null ? '../../file.png' : `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt="" className='backdrop' />
      </div>
      <div className="right-details">
        <div className="right-details-one">
          <h3>{movie.title}</h3>
          {genre.map(gen => (
            <p key={gen.id}>{gen.name}</p>
          ))}
        </div>
        <div className="right-details-two">
          <p>Rating: {movie.vote_average} ⭐</p>
          <p>Release Date: {movie.release_date} </p>
          <footer>{movie.original_language} | {movie.runtime} mins</footer>
        </div>
      </div>
      <div className="movie-info-container">
        <h1>"{movie.tagline}"</h1>
        <p>. . .</p>
        <p>{movie.overview}</p>
      </div>
    </motion.div>
  )
}

export default MovieDetails