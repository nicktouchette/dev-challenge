import React from 'react'

class Titles extends React.Component {
  render() {
    return (
      <ul>
        <h1>Movie Titles</h1>
        {this.props.movies.map(movie =>
          <li key={movie.id}><button id={movie.id} onClick={this.props.updateDetail}>{movie.title_name}</button></li>
        )}
      </ul>
    );
  }
}

export default Titles
