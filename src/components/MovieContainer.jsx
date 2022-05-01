import React from 'react'

function MovieContainer({movie, userSearch}) {
  return (
    <div className='movie-container'>
        { movie?.length > 0 ?
              <div className='movie-card-container'>
          {userSearch && <footer>search results for "{userSearch}"</footer>}
                
                  {movie.map(mov => (
                    <div className="movie-card">
                        <div key={mov.imdbID} className="movie-background">
                              <img src={mov.Poster !== 'N/A' ? mov.Poster : `../file.png` } alt="" />
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
          <div className='movie-card-container'>
            <h2>No movies found</h2>
          </div>
        }

    </div>
  )
}

export default MovieContainer