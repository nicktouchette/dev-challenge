import React from 'react'

class Titles extends React.Component {
  render() {
    return (
      <ul>
        <h1>Detail</h1>
        <li>{this.props.movie.id}</li>
        <li>Name: {this.props.movie.title_name}</li>
        <li>Year Release: {this.props.movie.release_year}</li>
      </ul>
    );
  }
}

export default Titles
