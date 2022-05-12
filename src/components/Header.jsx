import React from 'react'
import { Link } from 'react-router-dom'

function Header({discoverMovies}) {
  return (
    <div>
      <h1 onClick={discoverMovies}>
          <Link to="/">
            <span style={{ color: '#16b882' }}>b</span>movies
          </Link>
      </h1>
      <footer>TMDB api - Movie Search</footer>
    </div>
  )
}

export default Header