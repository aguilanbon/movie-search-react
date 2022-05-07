import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
      console.log(movie);
    }
    searchMovie(movId)
  },[movId, movie])
  

  return (
    <div className='details-container'>
      <div className="left-details">
        <img src={movie.poster_path === null ? '../../file.png' : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className='backdrop' />
      </div>
      <div className="right-details">
        <h3>{movie.title}</h3>
        {genre.map(gen => (
          <p key={gen.id}>{gen.name}</p>
        ))}
      </div>
    </div>
  )
}

export default MovieDetails