import React, { Component } from 'react';
import './App.css';

import apiKey from './apiKey';

import MovieCard from './components/MovieCards'
//https://api.themoviedb.org/3/movie/top_rated?api_key=8d25ce050ebd0627fcf07f8002011b71&language=en-US&page=1
const originalMovies = [
  {id: 1, title: 'Star Wars'},
  {id: 2, title: 'Cest ici'},
  {id: 3, title: 'Cnest pas absolomant fantastique'}
]

class App extends Component {
  state = { movies: [] }

  async componentDidMount(){
      // movies: originalMovies
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      const json = await response.json();
      this.setState({
        movies : json.results
      })

  }
  render() {
    const {movies} = this.state;
    return (
      <div className="App">
      {movies.map(movie => 
       <MovieCard key={movie.id} movie={movie} />
       
      )}
       
      </div>
    );
  }
}

export default App;
