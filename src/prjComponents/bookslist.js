import React, { Component } from "react";
import propTypes from "prop-types";
import * as BooksAPI from '../BooksAPI';
import Book from "./book";


/**
* @description Represents the book's list
* @render display all the books available from the server 
* @componentDidMount used to fetch all the books from the server 
*/
class BooksList extends Component {

  state = {
    allBooksList: []
  }

 


  componentDidMount() {
    BooksAPI.getAll()
      .then((receivedBooks) => {
        console.log(receivedBooks);
        this.setState(() => ({
          allBooksList: receivedBooks
        }))
      });

  }

  render() {
    const renderBookslist = this.state.allBooksList;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>All Books</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">All Books</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    renderBookslist.map((book) => (
                      <Book key={book.id} bookobj={book} />
                    ))

                  }

                </ol>
              </div>

            </div>

          </div>

        </div>
      </div>
    )
  }

}
export default BooksList;
