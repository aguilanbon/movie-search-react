import React from 'react'

function MovieContainer({movie}) {
  return (
    <div className='movie-container'>
        { movie?.length > 0 ?
              <div className='movie-card-container'>
                  {movie.map(mov => (
                    <div className="movie-card">
                        <div key={mov.imdbID} className="movie-background">
                          <img src={mov.Poster} alt="" />
                        </div>
                        <div className="movie-info">
                            <p id='movie-title'> {mov.Title} </p>
                            <div className="movie-details">
                            <p> {mov.Year} </p>
                            <p id='movie-type'> {mov.Type} </p>
                          </div>
                        </div>
                    </div>
                  ))}
              </div> 
              :
              <h1>no movies found</h1>
        }

    </div>
  )
}

export default MovieContainer