import React, { Component } from 'react';
import './App.css';

const itunes_url = "https://itunes.apple.com/search?attributeType=music&term="


class Music_App extends Component {
  state = {
    search1: {},
    search2: {},
    search3: {},
    value: '',
  }

  
  handleChange = event => {
    this.setState({
      value: event.target.value,
    })
  }
  
  handleSongQuery = event => {
    event.preventDefault();

    if(this.state.value === '') {
      this.setState({
        search1: {},
        search2: {},
        search3: {},
      })
    }

    else {
      const complete_url = itunes_url + this.state.value
  
      fetch(complete_url)
      .then(results => results.json())
      .then(data => {
        this.setState({ 
          search1: data.results[0],
          search2: data.results[1],
          search3: data.results[2],
          value: '',
        })
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>iTunes Code Challenge</h1>

        <form onSubmit={this.handleSongQuery}>
          <input
            placeholder="ENTER A SONG"
            autoFocus
            value={this.state.value}
            onChange={this.handleChange}
            />
          <button type="submit">Search</button>
        </form>

        <table>
          <tr>
            <th></th>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
          </tr>
          <tr>
            <td>Search 1</td>
            <td>{this.state.search1.trackName}</td>
            <td>{this.state.search1.artistName}</td>
            <td>{this.state.search1.collectionName}</td>
          </tr>
          <tr>
            <td>Search 2</td>
            <td>{this.state.search2.trackName}</td>
            <td>{this.state.search2.artistName}</td>
            <td>{this.state.search2.collectionName}</td>
          </tr>
          <tr>
            <td>Search 3</td>
            <td>{this.state.search3.trackName}</td>
            <td>{this.state.search3.artistName}</td>
            <td>{this.state.search3.collectionName}</td>
          </tr>
        </table>

      </React.Fragment>
    )
  }
}

export default Music_App;
