import React, { Component } from "react";
import propTypes from "prop-types";
import Book from "./book";


/**
* @description Represents the book's list
* @render display all the books available from the server 
* @componentDidMount used to fetch all the books from the server 
*/
class BooksList extends Component {

  static propTypes = {
    booklist: propTypes.array.isRequired,
    title: propTypes.string.isRequired,
    

  }

  render() {
    const renderBookslist = this.props.booklist;
    return (
      <div>
        <div className="list-books-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    renderBookslist.map((book) => (
                      <Book key={book.id} bookobj={book} refresh={this.props.refresh}  />
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
