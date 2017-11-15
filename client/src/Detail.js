import React from 'react'

class Titles extends React.Component {
  render() {
    return (
      <ul>
        <h1>Detail</h1>
        <li>Name: {this.props.movie.title_name}</li>
        <li>Year Release: {this.props.movie.release_year}</li>
        <li>Type: {this.props.movie.type}</li>
        <li>Language: {this.props.movie.language}</li>
        <li>Description: {this.props.movie.description}</li>
      </ul>
    );
  }
}

export default Titles
