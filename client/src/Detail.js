import React from 'react'

class Titles extends React.Component {
  render() {
    return (
      <ul>
        <h1>Detail</h1>
        <li>{this.props.id}</li>
      </ul>
    );
  }
}

export default Titles
