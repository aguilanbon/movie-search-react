import React, { useEffect, useRef, useState } from 'react'

function SearchBar({ fetchMovies, searchMovie, discoverMovies }) {

    const [searchTerm, setsearchTerm] = useState('')
    const [query, setQuery] = useState('')
    const [activeBtn, setactiveBtn] = useState('')
    const [discoverPageCounter, setdiscoverPageCounter] = useState(1)
    const [pageCounter, setpageCounter] = useState(1)
    const [suggestionsState, setSuggestionsState] = useState('hidden')
    const [suggestedMovies, setSuggestedMovies] = useState([])
    const [searchBorder, setSearchBorder] = useState('')

    const setActiveBtn = (btn) => {
        setactiveBtn(btn)
    }

    const fetchSearchSuggestions = async (title) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=84a074e905a08c91f14ba891ba4e57bc&language=en-US&page=1&include_adult=false&query=${title}&total_results=5`)
        const data = await response.json()
        setSuggestedMovies(data.results)
        console.log(data);
    }

    const handleSuggestions = (searchValue) => {
        setSearchBorder('set-border')
        setsearchTerm(searchValue)

        if (searchValue.length <= 2) {
            setSuggestionsState('hidden')
            setSearchBorder('')
        }

        if (searchValue.length > 2) {
            setSuggestionsState('searching')
            fetchSearchSuggestions(searchValue)
        }
    }

    useEffect(() => {
        if (activeBtn === '') {
            discoverMovies(discoverPageCounter)
        }
        if (activeBtn === 'popular' || activeBtn === 'top_rated' || activeBtn === 'upcoming') {
            fetchMovies(activeBtn, pageCounter)
        }

    }, [discoverPageCounter, pageCounter])

    let menuRef = useRef()

    useEffect(() => {
        let handler = document.addEventListener('mousedown', (e) => {
            if (!menuRef.current.contains(e.target)) {
                setSuggestionsState('hidden')
                setSearchBorder('')
            }
        })

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [])


    return (
        <div>
            <div className="input-container">
                <div className="suggestions">
                    <input
                        className={searchBorder === 'set-border' ? 'set-border' : ''}
                        type="text"
                        name=""
                        id=""
                        placeholder="type movie title"
                        value={searchTerm}
                        onChange={(e) => {
                            handleSuggestions(e.target.value)
                        }}
                    />
                    <div ref={menuRef} className={suggestionsState === 'hidden' ? `search-suggestions hidden` : 'search-suggestions'}>
                        {suggestedMovies.slice(0, 5).map(movies => (
                            <div onClick={() => {
                                searchMovie(movies.title)
                                setSuggestionsState('hidden')
                                setSearchBorder('')
                                setQuery(movies.title)
                                setSearchBorder('')
                                setsearchTerm('')
                            }} key={movies.id} className='suggestion-list'>
                                <img src={`https://image.tmdb.org/t/p/w92${movies.poster_path}`} alt="" style={{ height: '3rem', marginLeft: '.3rem', borderRadius: '5px' }} />
                                <div className='suggestion-details'>
                                    <p>{movies.title}</p>
                                    <div className='suggestion-mini-details'>
                                        <p id='mov-rel'>{movies.release_date}</p>
                                        <div id='mov-rating'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="star-logo h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <p id='mov-rel'>{movies.vote_average}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className={searchBorder === 'set-border' ? 'set-border' : ''} id='search-btn' onClick={() => {
                    searchMovie(searchTerm)
                    setQuery(searchTerm)
                    setsearchTerm('')
                    setSuggestionsState('hidden')
                    setSearchBorder('')
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
            {query !== '' ? '' :
                activeBtn === '' ?
                    <>
                        {discoverPageCounter <= 1 ? '' :
                            <button className='prevNext' onClick={() => setdiscoverPageCounter(prevCount => prevCount - 1)}>prev</button>
                        }
                        <button className='prevNext' onClick={() => setdiscoverPageCounter(prevCount => prevCount + 1)}>next</button>
                    </>
                    :
                    <>
                        {pageCounter <= 1 ? '' :
                            <button className='prevNext' onClick={() => setpageCounter(prevCount => prevCount - 1)}>prev</button>
                        }
                        <button className='prevNext' onClick={() => setpageCounter(prevCount => prevCount + 1)}>next</button>
                    </>
            }
        </div>
    )
}

export default SearchBar