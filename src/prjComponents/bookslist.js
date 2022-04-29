import React from "react";
import propTypes from "prop-types";
import Book from "./book";



const BooksList =({booklist,title,updateShelves,myReads})=>  {
    const renderBookslist = booklist;
    return (
      <div>
        <div className="list-books-title">
          <h2>{ title}</h2>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              {
                (renderBookslist === undefined || renderBookslist.length === 0) ?

                  <div>
                    <br />
                    <h3>NA</h3>
                  </div>
                  :
                  <div></div>

              }
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    renderBookslist.map((book) => (
                      <Book key={book.id} bookobj={book} updateShelves={updateShelves}  myReads={myReads}/>))

                  }

                </ol>
              </div>

            </div>

          </div>

        </div>
      </div>
    )
}

BooksList.propTypes = {
  booklist: propTypes.array.isRequired,
  title: propTypes.string.isRequired,
  updateShelves: propTypes.func.isRequired,
  myReads:propTypes.array.isRequired,
  
}
export default BooksList;
