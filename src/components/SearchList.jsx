import React, { Component } from 'react';
import SearchCard from './SearchCard';
import Axios from 'axios';
import queryString from 'query-string';

class SearchList extends Component {
    state = { movies: [] }

    componentDidMount() {
        this.fetchMovies();
        console.log('this.props', this.props);
    }

    componentDidUpdate(prevProps){
        if(this.props.location !== prevProps.location) {
            this.fetchMovies();
        }
    }
    
    fetchMovies = () => {
        let q = queryString.parse(this.props.location.search);
        Axios.get(`http://www.omdbapi.com/?apikey=6fcb9e4a&s=${q.searchText}`)
            .then(resp=>resp.data)
            .then(data=>data.Search)
            .then(movies=>this.setState({movies}))

    }
    render() {
        const searchList = this.state.movies.map((m, index) => <SearchCard movie={m} key={index} />)
        return (
            <div className="row">
                    { searchList }
            </div>
        );
    }
}

export default SearchList;