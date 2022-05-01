import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieContainer from './components/MovieContainer';

function App() {
	const [ searchTerm, setsearchTerm ] = useState([]);
	const [ movie, setmovie ] = useState([]);
	const [ movieTitle, setmovieTitle ] = useState('');

	const searchMovies = async (title, pageNo) => {
		await fetch(`http://www.omdbapi.com/?s=${title}&apikey=d3a0d17b&p=${pageNo}`)
			.then((data) => data.json())
			.then((el) => {
				const arr = el.Search;
				setmovie(arr);
				console.log(arr);
			});

		console.log(pageNo);
	};

	useEffect(() => {
		searchMovies('avengers', 1);
	}, []);

	return (
		<div className="App">
			<Header
				searchTerm={searchTerm}
				setsearchTerm={setsearchTerm}
				searchMovies={searchMovies}
				setmovieTitle={setmovieTitle}
			/>
			<MovieContainer movie={movie} userSearch={movieTitle} searchTerm={searchTerm} />
			<Footer />
		</div>
	);
}

export default App;
