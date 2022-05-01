import React from 'react'

function Header({searchTerm, setsearchTerm, searchMovies, setmovieTitle}) {
  return (
    <div>
          <h1>
              <a href="/">
                <span style={{ color: '#16b882' }}>b</span>movies
              </a>
          </h1>
          <footer>omdb api search index</footer>
          <div className="input-container">
        <input
          type="text"
          name=""
          id=""
          placeholder="type movie title"
          value={searchTerm}
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
        />
        <button
          onClick={() => {
            searchMovies(searchTerm, 1);
            setmovieTitle(searchTerm);
            // setsearchTerm('');
          }}
        >
          <p>Search</p>
        </button>
          </div>
          
    </div>
  )
}

export default Header