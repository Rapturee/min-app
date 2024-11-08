import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie, markAsSeen } from './redux/counterSlice';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [variant, setVariant] = useState(null);
  const apiKey = '181c980e';
  const dispatch = useDispatch();
  const movieList = useSelector(state => state.favorites.movies);

  const fetchMovies = async (term) => {
    try {
      const url = `https://www.omdbapi.com/?s=${encodeURIComponent(term)}&apikey=${apiKey}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setError(null);
      } else {
        setMovies([]);
        setError(`Error: ${data.Error}`);
      }
    } catch (err) {
      setMovies([]);
      setError(`Error fetching data: ${err.message}`);
    }
  };
  
  
  
  
  

  useEffect(() => {
    fetchMovies('Guardians of the Galaxy');
    setVariant(Math.random() > 0.5 ? 'A' : 'B');
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchTerm) {
      fetchMovies(searchTerm);
    }
  };

  const addMovieToList = (movie) => {
    if (!movieList.some((m) => m.imdbID === movie.imdbID)) {
      dispatch(addMovie(movie));
    }
  };

  const deleteMovie = (imdbID) => {
    dispatch(removeMovie(imdbID));
  };

  const markMovieAsSeen = (movie) => {
    dispatch(markAsSeen(movie));
  };

  return (
    <div className="App">
      <h1>OMDb Movie Information</h1>

      <input
        type="text"
        value={searchTerm}
        placeholder="Enter movie title"
        onChange={handleSearch}
      />

      {variant === 'A' ? (
        <button onClick={handleSearchSubmit}>Search Movies (Version A)</button>
      ) : (
        <button onClick={handleSearchSubmit}>Find Film (Version B)</button>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div className="movie-item" key={movie.imdbID}>
              <h3>{movie.Title} ({movie.Year})</h3>
              {movie.Poster !== "N/A" && (
                <img src={movie.Poster} alt={movie.Title} />
              )}
              <button onClick={() => addMovieToList(movie)}>Favorite</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies found. Try searching for another title.</p>
      )}

      <h2>My Movie List</h2>
      <ul>
        {movieList.map((m) => (
          <li key={m.imdbID}>
            {m.Title} ({m.Year}) {m.seen ? '(Seen)' : ''}
            <button onClick={() => markMovieAsSeen(m)}>Seen</button>
            <button onClick={() => deleteMovie(m.imdbID)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
