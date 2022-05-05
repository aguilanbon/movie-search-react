import React, {useState, useEffect} from 'react'
import MovieContainer from '../components/MovieContainer';
import SearchBar from '../components/SearchBar';

function MoviesHome() {

  const [ movie, setmovie ] = useState([]);

  const dicoverMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=84a074e905a08c91f14ba891ba4e57bc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
		const movieData = await response.json()
		console.log(movieData.results);
		setmovie(movieData.results)
  }

	const fetchMovies = async (opt) => {
		const response = await fetch(`https://api.themoviedb.org/3/movie/${opt}?api_key=84a074e905a08c91f14ba891ba4e57bc`)
		const movieData = await response.json()
		console.log(movieData.results);
		setmovie(movieData.results)
	};

  const searchMovie = async (title) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=84a074e905a08c91f14ba891ba4e57bc&language=en-US&page=1&include_adult=false&query=${title}`)
    const data = await response.json()
    const movie = data.results
    setmovie(movie)
  }

	useEffect(() => {
		dicoverMovies()
	}, []);

  return (
    <div>
      <SearchBar fetchMovies={fetchMovies} searchMovie={searchMovie}/>
      <MovieContainer movie={movie} />
    </div>
  )
}

export default MoviesHome