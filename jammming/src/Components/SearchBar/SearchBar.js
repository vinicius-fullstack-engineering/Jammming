import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
        
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    handleKeyPress(event) {
        if (event.key ==='Enter') {
            this.props.onSearch(this.state.term);
        }
    }
    
    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist"/>
                <button onClick={this.search} className="SearchButton" onKeyPress={this.handleKeyPress}>SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;