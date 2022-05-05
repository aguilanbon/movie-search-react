import React, { useState } from 'react'

function SearchBar({fetchMovies}) {
    
    const [searchTerm, setsearchTerm] = useState('')
    const [searchedMovie, setsearchedMovie] = useState([])

    return (
        <div>
            <div className="input-container">
                <input
                type="text"
                name=""
                id=""
                placeholder="type movie title"/>
                <button id='search-btn'>
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