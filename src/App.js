import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import './App.css';
import apiKey from './apiKey';

import MovieCard from './components/MovieCards'
import MovieDialog from './components/MovieDialog'
 
//https://api.themoviedb.org/3/movie/top_rated?api_key=8d25ce050ebd0627fcf07f8002011b71&language=en-US&page=1


const styles = {
  root: {
    flexGrow: 1,
  },
};

class App extends Component {
  state = { 
    movies: [],
    selectedMovie: null,
    searchText: ''
  }

  selectMovie = movie => this.setState({
    selectedMovie: movie
  })
  
  clearMovie = () => this.setState({ selectedMovie: null })

  searchTextChanged = e => this.setState({
    searchText: e.target.value
  })

  search = async e  => {
    e.preventDefault()

    const {searchText} = this.state
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`)
    const json = await response.json();
    this.setState({
      movies : json.results
    })
  }

  async componentDidMount(){
      // movies: originalMovies
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      const json = await response.json();
      this.setState({
        movies : json.results
      })

  }
  render() {
    const {movies, selectedMovie, searchText} = this.state;
    return (
      <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="title">
            Best Movies Ever
          </Typography>
          <form onSubmit={this.search}>
            <Input 
            type="search"
            value={searchText}
            onChange = {this.searchTextChanged}
            startAdornment = {
              <InputAdornment>
                <span role="img" aria-label="search " />
              </InputAdornment>
            }
            />
          </form>
        </Toolbar>
      </AppBar>
   
      <div className="App movies">
      {movies.map(movie => 
       <MovieCard 
        key={movie.id} 
        movie={movie}
        selectMovie={this.selectMovie} />
       
      )}
       
      </div>
      <MovieDialog 
        movie={selectedMovie}
        handleClose={this.clearMovie}/>
    </div>
    );
  }
}

export default withStyles(styles)(App);

