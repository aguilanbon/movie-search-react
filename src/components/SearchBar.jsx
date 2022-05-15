import React, {useEffect, useState} from 'react'

function SearchBar({fetchMovies, searchMovie, discoverMovies}) {

    const [searchTerm, setsearchTerm] = useState('')
    const [query, setQuery] = useState('')
    const [activeBtn, setactiveBtn] = useState('')
    const [discoverPageCounter, setdiscoverPageCounter] = useState(1)
    const [pageCounter, setpageCounter] = useState(1)

    const setActiveBtn = (btn) => {
        setactiveBtn(btn)
    }

    const nextBtn = () => {
        setdiscoverPageCounter(prevCount => prevCount + 1)
    }

    const prevBtn = () => {
        setdiscoverPageCounter(prevCount => prevCount - 1)
    }

    const nextBtnActive = () => {
        setpageCounter(prevCount => prevCount + 1)
    }

    const prevBtnActive = () => {
        setpageCounter(prevCount => prevCount - 1)
    }

    useEffect(() => {
        if(activeBtn === '') {
            discoverMovies(discoverPageCounter)
        }
        if(activeBtn === 'popular' || activeBtn === 'top_rated' || activeBtn === 'upcoming') {
            fetchMovies(activeBtn, pageCounter)
        }

    }, [discoverPageCounter, pageCounter])  

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
                    setActiveBtn('popular')
                    fetchMovies('popular')
                    setpageCounter(1)
                    setQuery('')
                    }}>Popular</button>
                <button className={activeBtn === 'top_rated' ? `btn active` : 'btn'} onClick={() => {
                    setActiveBtn('top_rated')
                    fetchMovies('top_rated')
                    setpageCounter(1)
                    setQuery('')
                    }}>Top Rated</button>
                <button className={activeBtn === 'upcoming' ? `btn active` : 'btn'} onClick={() => {
                    setActiveBtn('upcoming')
                    fetchMovies('upcoming')
                    setpageCounter(1)
                    setQuery('')
                    }}>Upcoming</button>
            </div>
            <div className="query-text">
                {query === '' ? <p></p> : <p>Search results for "{query}"</p>}
            </div>
            
            {activeBtn === '' ? 
                <>
                    {discoverPageCounter <= 1 ? '' : 
                        <button className='prevNext' onClick={prevBtn}>prev</button>
                    }
                    <button className='prevNext' onClick={nextBtn}>next</button>
                </>
            :
                <>
                    {pageCounter <= 1 ? '' : 
                        <button className='prevNext' onClick={prevBtnActive}>prev</button>
                    }
                    <button className='prevNext' onClick={nextBtnActive}>next</button>
                </>
            }
    </div>
    )
}

export default SearchBar