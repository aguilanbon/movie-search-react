import React, {useState} from 'react'

function SearchBar({fetchMovies, searchMovie}) {

    const [searchTerm, setsearchTerm] = useState('')

    return (
        <div>
            <div className="input-container">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="type movie title"
                    value={searchTerm}
                    onChange={(e) => setsearchTerm(e.target.value)}
                />
                <button id='search-btn' onClick={() => {
                        searchMovie(searchTerm)
                        setsearchTerm('')
                    }
                }>
                <p>Search</p>
                </button>
            </div>
            <div className="btn-container">
                <button className='btn' onClick={() => fetchMovies('popular')}>Popular</button>
                <button className='btn' onClick={() => fetchMovies('top_rated')}>Top Rated</button>
                <button className='btn' onClick={() => fetchMovies('upcoming')}>Upcoming</button>
            </div>
    </div>
    )
}

export default SearchBar