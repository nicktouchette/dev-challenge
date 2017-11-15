import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {movies: []}

  componentDidMount() {
    fetch('/movies')
      .then(res => res.json())
      .then(movies => this.setState({ movies }));
  }

  render() {
    return (
      <div className="App">
        <h1>Movie Titles</h1>
        {this.state.movies.map(movie =>
          <div key={movie.id}>{movie.title_name}</div>
        )}
      </div>
    );
  }
}

export default App;
