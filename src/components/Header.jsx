import React from 'react'

function Header({}) {
  return (
    <div>
      <h1>
          <a href="/">
            <span style={{ color: '#16b882' }}>b</span>movies
          </a>
      </h1>
      <footer>TMDB api search index</footer>
    </div>
  )
}

export default Header