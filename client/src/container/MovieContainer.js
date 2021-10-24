
import React, { useState } from 'react'

import MovieList from "../components/main_movie_page/MovieList"
import MovieDetail from '../components/movie_detail/MovieDetail'
import SearchBar from '../components/main_movie_page/SearchBar'


const MovieContainer = () => {
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null)

    // searches API by movie title (hardcoded for batman for example)
    const onTitleSearched = function (title) {
        setSelectedMovie(null)
        setMovies([])
        fetch(`https://www.omdbapi.com/?s=${title}&apikey=30f7090a`)
            .then(res => res.json())
            .then(data => setMovies(data.Search))
    }

    // searches API by movie imdb id after one has been selected form the movie list
    const onMovieClick = function (movie) {
        fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=30f7090a`)
            .then(res => res.json())
            .then(data => setSelectedMovie(data))
    }

    // const getMoviesByGenre = function(genre){
    //     fetch(`http://www.omdbapi.com/?t=${genre}apikey=30f7090a`)
    //     .then(res => res.json())
    //     .then(movies => setMovies(movies))
    // }

    return (
        <>
            <div className="movie-container">
                <h1>THIS IS THE MOVIE CONTAINER</h1>
                <SearchBar onTitleSearched={onTitleSearched} />
                {!selectedMovie ? <MovieList movies={movies} onMovieClick={onMovieClick} /> : null}
                {selectedMovie ? <MovieDetail selectedMovie={selectedMovie} /> : null}
            </div>
        </>
    )
}

export default MovieContainer;

