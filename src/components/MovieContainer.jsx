import React from 'react'

function MovieContainer({movie}) {
  return (
    <div className='movie-container'>
        { movie?.length > 0 ?
          <div className='movie-card-container'>
              {movie.map(mov => (
                <div className="movie-card" key={mov.id}>
                    <div  className="movie-background">
                      <img src={mov.poster_path === null ? '../../file.png' : `https://image.tmdb.org/t/p/w342${mov.poster_path}`} alt="" />
                    </div>
                    <div className="movie-info">
                        <p id='movie-title'> {mov.title} </p>
                      <div className="movie-details">
                        <p> {mov.release_date} </p>
                        <p id='movie-type'> {mov.original_language} </p>
                      </div>
                    </div>
                </div>
              ))}
          </div> 
              :
          <div className='movie-card-container'>
            <div className="query-text">
              No movie found
            </div>
            <img src="../error.png" alt="" style={{height: 150, marginTop: 40}}/>
          </div>
        }
    </div>
  )
}

export default MovieContainer