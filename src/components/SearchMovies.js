import React, { useState } from "react";
import MovieCard from './MovieCard';

function SearchMovies() {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);

	function searchInputChange(e) {
		return setQuery(e.target.value);
	}

	const searchMovies = async e => {
		e.preventDefault();
		const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;
		const url = `https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data.results);
			setMovies(data.results);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="searchContainer">
				<form className="form" onSubmit={searchMovies}>
					<label className="label" htmlFor="query">
						Movie Name
					</label>
					<input
						type="text"
						id="searchInput"
						className="input"
						name="query"
						value={query}
						onChange={searchInputChange}
						placeholder="i.e. 'John Q'"
					/>
					<button type="submit" className="button">
						Search
					</button>
				</form>
			</div>
         {movies.filter(movie => movie.poster_path).map(movie => (
            <MovieCard movie={movie} key={movie.id}/>
         ))}
		</>
	);
}
export default SearchMovies;
