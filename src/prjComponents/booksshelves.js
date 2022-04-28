import React, { Component } from "react";
import BooksList from "./bookslist";

class BooksShelves extends Component {

    state = {
        currentlyReadingBooksList: [],
        wantToReadBooksList: [],
        readBooksList: [],
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <BooksList booklist={this.state.currentlyReadingBooksList} title={'Currently Reading'} />
                    <BooksList booklist={this.state.wantToReadBooksList} title={'Wants To Read'}  />
                    <BooksList booklist={this.state.readBooksList} title={'Read'}  />
                </div>
            </div>
        )
    }

}
export default BooksShelves;