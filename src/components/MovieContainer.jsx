import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function MovieContainer({ movie }) {
  return (
    <div className='movie-container'>
      {movie?.length > 0 ?
        <div className='movie-card-container'>
          {movie.map(mov => (
            <Link to={`/movie-details/${mov.id}`} key={mov.id}>
              <motion.div layout className="movie-card" key={mov.id}>
                <motion.div animate={{ y: [-25, 0] }} className="movie-background">
                  <img loading='lazy' src={mov.poster_path === null ? 'https://i.ibb.co/vwsz1SP/file.png' : `https://image.tmdb.org/t/p/w342${mov.poster_path}`} alt="" className='poster' />
                </motion.div>
                <motion.div animate={{ y: [50, 0] }} className="movie-info">
                  <p id='movie-title'> {mov.title} </p>
                  <div className="movie-details">
                    <p> {mov.release_date} </p>
                    <p id='movie-type'> {mov.original_language} </p>
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
        :
        <div className='movie-card-container'>
          <div className="query-text">
            No movie found
          </div>
          <img src="../error.png" alt="" style={{ height: 150, marginTop: 40 }} />
        </div>
      }
    </div>
  )
}

export default MovieContainer