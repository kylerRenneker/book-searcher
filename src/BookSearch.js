import React, { Component } from 'react';

class BookSearch extends Component {

    // handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(e.target["book-search"].value)
    //     const searchTerm = e.target["book-search"].value
    //     this.props.handleBookFetch(searchTerm)
    // }

    // handleInput(event){
    //     console.log(event.target.value)
    //     return event.target.value;
    // }

    render() {
        return (
            <div>
                {/* <form onSubmit={e => this.handleSubmit(e)}> */}
                    <label htmlFor="book-search">Search:</label>
                    <input id="book-search" name="book-search" type="Text" placeholder="henry"></input>
                    <button type="submit">Search</button>
                {/* </form> */}
            </div>
        );
    }
}

export default BookSearch;