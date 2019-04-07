import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
class BookSearcherApp extends Component {
    state = {
        books: []
    }

    filterBooksByType(bookList, type) {
        console.log(type, bookList);
        if(type === "true") {
            return bookList.filter(book => book.saleInfo.isEbook)
        }
        else if(type === "false") {
            return bookList.filter(book => !book.saleInfo.isEbook)
        }
        else {
            return bookList
        }
    }

    getBookList = (searchTerm, filterOptions)  => {
        console.log("search term in BookSeacherApp:", searchTerm)
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
        const options = {
            method: 'GET',
            headers: {
                "x-api-key": "AIzaSyBvA9m6sozqZkxlQgZvi_FQy-w3dPaLmm4",
                "Content-Type": "application/json"
            }
        }

        fetch(url, options)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong, please try again later');
                }
                return res;
            })
            .then(res => res.json())
            .then((data) => {
                const bookList = data.items.map(book => book)
                this.setState({
                    books: this.filterBooksByType(bookList, filterOptions)
                })
            })
            .catch(err => {
                this.setState({error: err.message})
        })
    }
    render() {
        console.log(this.state)
        return (
            <>
                <h1 className="mainHead">Google Book Search</h1>
                <SearchBar handleBookFetch={this.getBookList}/>
                <SearchResults books={this.state.books}/>
            </>
        );
    }
}

export default BookSearcherApp;