import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleClear = (event) => {
    this.setState({ value: '' })
    this.props.updateMovies()
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateMovies(`/movies?action=search&value=${this.state.value}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Filter Results:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <input type="button" value="Clear" onClick={this.handleClear} />
      </form>
    );
  }
}

export default Search
