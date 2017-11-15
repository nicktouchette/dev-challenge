import React, { Component } from 'react'
import Search from './Search'
import Detail from './Detail'
import Titles from './Titles'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { movies: [], detailId: null }
  }

  componentDidMount() {
    this.updateMovies()
  }

  updateDetail = (e) => {
    this.setState({ detailId: e.target.id })
  }

  updateMovies = (search) => {
    const query = !search ? '/movies' : `/movies?action=search&value=${search}`
    fetch(query)
      .then(res => res.json())
      .then(movies => this.setState({ movies }))
  }

  render() {
    return (
      <div className="App">
        <Titles movies={this.state.movies} updateDetail={this.updateDetail} />
        <Search onSubmit={this.updateMovies}/>
        <Detail id={this.state.detailId}/>
      </div>
    )
  }
}

export default App
