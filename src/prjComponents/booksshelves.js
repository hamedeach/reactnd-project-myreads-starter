import React, { Component } from "react";
import BooksList from "./bookslist";
import * as BooksAPI from '../BooksAPI';
//import { Link } from 'react-router-dom';

class BooksShelves extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentlyReadingBooksList: [],
            wantToReadBooksList: [],
            readBooksList: [],
        }
        this.myReads = []
    }


    _buildMyReady()
    {
        BooksAPI.getAll()
        .then((receivedBooks) => {
            console.log(receivedBooks);
            this.myReads = receivedBooks;
            const readShelf = receivedBooks.filter(book => book.shelf === 'read');
            const wantToReadShelf = receivedBooks.filter(book => book.shelf === 'wantToRead');
            const currentlyReadingShelf = receivedBooks.filter(book => book.shelf === 'currentlyReading');
            this.setState(() => ({
                currentlyReadingBooksList: currentlyReadingShelf,
                wantToReadBooksList:wantToReadShelf,
                readBooksList:readShelf,
            }))

        })
    }
    componentDidMount() {

       this._buildMyReady();
    }




    updateShelves = (updatedbook, oldbookshelf, newbookshelf, myreadsobj) => {
        //console.log('updating shelves was invoked !!')
        //console.log(`${updatedbook.title} was update - old shelf was ${oldbookshelf} - new shelf is ${newbookshelf}`);        

        //just reload all shelves from API
        this._buildMyReady();


    }




    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <BooksList booklist={this.state.currentlyReadingBooksList} title={'Currently Reading'} updateShelves={this.updateShelves}  myReads={this.myReads}/>
                    <BooksList booklist={this.state.wantToReadBooksList} title={'Wants To Read'} updateShelves={this.updateShelves}  myReads={this.myReads} />
                    <BooksList booklist={this.state.readBooksList} title={'Read'} updateShelves={this.updateShelves}  myReads={this.myReads}/>
                </div>


            </div>
        )
    }

}
export default BooksShelves;