import React, { Component } from 'react';
import './App.css';

import MovieCard from './components/MovieCards'

const originalMovies = [
  {id: 1, title: 'Star Wars'},
  {id: 2, title: 'Cest ici'},
  {id: 3, title: 'Cnest pas absolomant fantastique'}
]

class App extends Component {
  state = { movies: [] }

  componentDidMount(){
    this.setState({
      movies: originalMovies
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
