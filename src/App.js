import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieContainer from './components/MovieContainer';

function App() {
	const [ searchTerm, setsearchTerm ] = useState([]);
	const [ movie, setmovie ] = useState([]);
	const [ movieTitle, setmovieTitle ] = useState('');
	const [ counter, setcounter ] = useState(1);

	const searchMovies = async (title) => {
		await fetch(`http://www.omdbapi.com/?s=${title}&apikey=d3a0d17b`).then((data) => data.json()).then((el) => {
			const arr = el.Search;
			setmovie(arr);
			console.log(arr);
		});
	};

	const nextPage = async (title) => {
		setcounter(counter + 1);
		await fetch(`http://www.omdbapi.com/?s=${title}&apikey=d3a0d17b&page=${counter}`)
			.then((data) => data.json())
			.then((el) => {
				const arr = el.Search;
				setmovie(arr);
			});
	};

	useEffect(() => {
		searchMovies('avengers');
	}, []);

	return (
		<div className="App">
			<Header
				searchTerm={searchTerm}
				setsearchTerm={setsearchTerm}
				searchMovies={searchMovies}
				setmovieTitle={setmovieTitle}
			/>
			<MovieContainer movie={movie} userSearch={movieTitle} searchTerm={searchTerm} nextPage={nextPage} />
			<Footer />
		</div>
	);
}

export default App;
