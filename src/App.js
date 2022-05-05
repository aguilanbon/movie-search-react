import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MoviesHome from './pages/MoviesHome';

function App() {

// 84a074e905a08c91f14ba891ba4e57bc


	return (
		<div className="App">
			<Header/>
			<MoviesHome />
			<Footer />
		</div>
	);
}

export default App;
