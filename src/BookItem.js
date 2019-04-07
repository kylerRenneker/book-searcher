import React, { Component } from 'react';
import './BookItem.css';

class BookItem extends Component {
    
    formatAuthors(array) {
        if(array){
        let authorString =  array.join(", ")
        return `Author(s): ${authorString}`
        }
    }

    checkForSale(saleability) {
        if(saleability === "FOR_SALE") {
            return `Price: ${this.props.bookInfo.saleInfo.listPrice.amount}`
        }
    }

    render() {
        console.log(this.props)
        return (
            <li>
                <img className="book-icon" src={this.props.bookInfo.volumeInfo.imageLinks.thumbnail}></img>
                <div className="book-info">
                    <h2>{this.props.bookInfo.volumeInfo.title}</h2>
                    <h3>{this.formatAuthors(this.props.bookInfo.volumeInfo.authors)}</h3>
                    <h3>{this.checkForSale(this.props.bookInfo.saleInfo.saleability)}</h3>
                    <p>{this.props.bookInfo.volumeInfo.description}</p>
                </div>
            </li>
        );
    }
}

export default BookItem;