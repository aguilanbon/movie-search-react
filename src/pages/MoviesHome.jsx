import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer';
import MovieContainer from '../components/MovieContainer';
import SearchBar from '../components/SearchBar';

function MoviesHome() {

  const [ movie, setmovie ] = useState([]);

  const discoverMovies = async (page) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=84a074e905a08c91f14ba891ba4e57bc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`)
		const movieData = await response.json()
    console.log(movieData);
		setmovie(movieData.results)
  }

	const fetchMovies = async (opt, page) => {
		const response = await fetch(`https://api.themoviedb.org/3/movie/${opt}?api_key=84a074e905a08c91f14ba891ba4e57bc&page=${page}`)
		const movieData = await response.json()
		setmovie(movieData.results)
	};

  const searchMovie = async (title) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=84a074e905a08c91f14ba891ba4e57bc&language=en-US&page=1&include_adult=false&query=${title}`)
    const data = await response.json()
    const movie = data.results
    setmovie(movie)
  }

	useEffect(() => {
		discoverMovies()
	}, []);

  return (
    <div>
      <SearchBar fetchMovies={fetchMovies} searchMovie={searchMovie} discoverMovies={discoverMovies}/>
      <MovieContainer movie={movie} />
      <Footer />
    </div>
  )
}

export default MoviesHome