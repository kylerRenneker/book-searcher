import React, { Component } from 'react';
import BookSearch from './BookSearch';
import FilterOptions from './FilterOptions';

class SearchBar extends Component {

    handleSubmit(e) {
        e.preventDefault();
        const searchTerm = e.target["book-search"].value
        const filterOption = e.target["print-type"].value
        this.props.handleBookFetch(searchTerm, filterOption)
    }

    render() {
        return (
            <header>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <BookSearch handleBookFetch={this.props.handleBookFetch}/>
                    <FilterOptions handleBookType={this.props.handleBookType}/>
                </form>
            </header>
        );
    }
}

export default SearchBar;