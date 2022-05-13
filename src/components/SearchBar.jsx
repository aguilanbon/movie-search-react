import React, {useEffect, useState} from 'react'

function SearchBar({fetchMovies, searchMovie, discoverMovies}) {

    const [searchTerm, setsearchTerm] = useState('')
    const [query, setQuery] = useState('')
    const [activeBtn, setactiveBtn] = useState('')
    const [discoverPageCounter, setdiscoverPageCounter] = useState(2)
    const [pageCounter, setpageCounter] = useState(2)

    const setActiveBtn = (btn) => {
        setactiveBtn(btn)
    }

    const nextBtn = () => {
        setdiscoverPageCounter(prevCount => prevCount + 1)
        discoverMovies(discoverPageCounter)
    }

    // const prevBtn = () => {
    //     setdiscoverPageCounter(prevCount => prevCount - 1)
    //     discoverMovies(discoverPageCounter)
    // }


    useEffect(() => {
    }, [])  
    
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
                        setQuery(searchTerm)
                        setsearchTerm('')
                    }
                }>
                <p>Search</p>
                </button>
            </div>
            <div className="btn-container">
                <button className={activeBtn === 'popular' ? `btn active` : 'btn'} onClick={() => {
                    fetchMovies('popular')
                    setActiveBtn('popular')
                    }}>Popular</button>
                <button className={activeBtn === 'top_rated' ? `btn active` : 'btn'} onClick={() => {
                    fetchMovies('top_rated')
                    setActiveBtn('top_rated')
                    }}>Top Rated</button>
                <button className={activeBtn === 'upcoming' ? `btn active` : 'btn'} onClick={() => {
                    fetchMovies('upcoming')
                    setActiveBtn('upcoming')
                    }}>Upcoming</button>
            </div>
            <div className="query-text">
                {query === '' ? <p></p> : <p>Search results for "{query}"</p>}
            </div>
            
            {activeBtn === '' ? 
                <>
                    <button className='prevNext'>prev</button>
                    <button className='prevNext' onClick={() => {
                        nextBtn()
                        }}>next</button>
                </>
            :
                <>
                    <button className='prevNext'>prev</button>
                    <button className='prevNext' onClick={() => {
                        setpageCounter(prevCount => prevCount + 1)
                        fetchMovies(activeBtn, pageCounter)
                    }}>next</button>
                </>
            }
    </div>
    )
}

export default SearchBar