import React, { Component } from 'react';
import BookItem from './BookItem';

class SearchResults extends Component {
    // static defaultProps = {
    //     books: []
    // }
    render() {
        console.log(this.props)
        // const bookList = this.props.books.bookList
        // let books = [];

        // if(this.props.books.bookList) {
            const books = this.props.books.map((book, i) => {
            return <BookItem bookInfo={book} key={book.id}/>
        })
        // }
        return (
            <div>
                <ul>{books}</ul>
            </div>
        );
    }
}

// SearchResults.defaultProps = {
//     books: {
//         bookList: []
//     }
// }

export default SearchResults;
