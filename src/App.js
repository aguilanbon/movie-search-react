import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MoviesHome from './pages/MoviesHome';
import MovieDetails from './pages/MovieDetails'

function App() {

// 84a074e905a08c91f14ba891ba4e57bc

	return (
		<div className="App">
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route path='/' element={<MoviesHome />} />
					<Route path='/movie-details/:movieId' element={<MovieDetails />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
