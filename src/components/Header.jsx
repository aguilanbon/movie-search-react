import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <h1>
          <Link to="/">
            <span style={{ color: '#16b882' }}>b</span>movies
          </Link>
      </h1>
      <footer>TMDB api - Movie Search</footer>
    </div>
  )
}

export default Header