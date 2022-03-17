import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
        
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }
    
    render() {
        return (
            <div className="SearchBar">
                <input 
                    onChange={this.handleTermChange} 
                    placeholder="Enter A Song, Album, or Artist" 
                />
                {/*Save in case to revert to this: instead of "onSearch" attribute, it was set as "onClick={this.search}"*/}
                <button onSearch={this.props.onSearch} className="SearchButton" >SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;