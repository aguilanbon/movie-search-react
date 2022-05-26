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
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=84a074e905a08c91f14ba891ba4e57bc&language=en-US&page=1&include_adult=false&query=${title}`)
        const data = await response.json()
        console.log(data);
    }

    const sugFunction = (searchValue) => {
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
                            sugFunction(e.target.value)
                        }}
                    />
                    <div ref={menuRef} className={suggestionsState === 'hidden' ? `search-suggestions hidden` : 'search-suggestions'}>
                        <p>batman</p>
                        <p>spiderman</p>
                        <p>superman</p>
                        <p>the flash</p>
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

            {activeBtn === '' ?
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