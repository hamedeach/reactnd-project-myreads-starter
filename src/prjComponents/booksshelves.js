import React, { Component } from "react";
import BooksList from "./bookslist";

class BooksShelves extends Component {

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <BooksList />
                    <BooksList />
                    <BooksList />
                </div>
            </div>
        )
    }

}
export default BooksShelves;