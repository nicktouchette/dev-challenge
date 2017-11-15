import React, { Component } from 'react'
import Search from './Search'
import Detail from './Detail'
import Titles from './Titles'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { movies: [], detail: {} }
  }

  componentDidMount() {
    this.updateMovies()
  }

  updateDetail = (e) => {
    fetch(`/movies/${e.target.id}`)
      .then(res => res.json())
      .then(detail => this.setState({ detail }))
  }

  updateMovies = (query = '/movies') => {
    fetch(query)
      .then(res => res.json())
      .then(movies => this.setState({ movies }))
  }

  render() {
    return (
      <div className="App">
        <Titles movies={this.state.movies} updateDetail={this.updateDetail} />
        <Search updateMovies={this.updateMovies} />
        <Detail movie={this.state.detail}/>
      </div>
    )
  }
}

export default App
