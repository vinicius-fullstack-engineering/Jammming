import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist} from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 'id1'},
        {name: 'name2', artist:'artist2', album:'album2', id:'id2'},
        {name: 'name3', artist:'artist3', album: 'album3', id: 'id3'}
      ],

      playlistName: 'Name of your Playlist',

      playlistTracks: [
        {name: 'a1', artist: 'b1', album: 'c1', id: 'd1'},
        {name: 'a2', artist: 'b2', album: 'c2', id: 'd2'},
        {name: 'a3', artist: 'b3', album: 'c3', id: 'd3'}
      ]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(curretnTrack => curretnTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack}
            />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;