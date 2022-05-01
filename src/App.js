import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import MovieContainer from './components/MovieContainer';

function App() {
	const [ searchTerm, setsearchTerm ] = useState([]);
	const [ movie, setmovie ] = useState([]);
	const [ movieTitle, setmovieTitle ] = useState('');

	const searchMovies = async (title) => {
		await fetch(`http://www.omdbapi.com/?s=${title}&apikey=d3a0d17b`).then((data) => data.json()).then((el) => {
			const arr = el.Search;
			setmovie(arr);
			console.log(arr);
		});
	};

	useEffect(() => {
		searchMovies('avengers');
	}, []);

	return (
		<div className="App">
			<h1>
				<span style={{ color: '#16b882' }}>b</span>movies
			</h1>
			<footer>omdb api search index</footer>
			<input
				type="text"
				name=""
				id=""
				placeholder="Movie title"
				value={searchTerm}
				onChange={(e) => {
					setsearchTerm(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					searchMovies(searchTerm);
					setmovieTitle(searchTerm);
					setsearchTerm('');
				}}
			>
				Search
			</button>
			<MovieContainer movie={movie} userSearch={movieTitle} />
			<Footer />
		</div>
	);
}

export default App;
