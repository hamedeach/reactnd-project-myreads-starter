import React, { Component } from "react";
import BooksList from "./bookslist";
import * as BooksAPI from '../BooksAPI';

class BooksShelves extends Component {

    state = {
        currentlyReadingBooksList: [],
        wantToReadBooksList: [],
        readBooksList: [],
    }

    loadcurrentlyReadingBooksList() {
        BooksAPI.getAll()
            .then((receivedBooks) => {
              const tempShelf=  receivedBooks.filter(book=>book.shelf==='currentlyReading')
                console.log(tempShelf);
                this.setState(() => ({
                    currentlyReadingBooksList: tempShelf,
                   
                }))
            });
    }

    loadwantToReadBooksList() {
        BooksAPI.getAll()
            .then((receivedBooks) => {
                const tempShelf=  receivedBooks.filter(book=>book.shelf==='wantToRead')
                console.log(tempShelf);
                this.setState(() => ({
                    wantToReadBooksList: tempShelf,
                    
                }))
            });
    }


    loadreadBooksList() {
        BooksAPI.getAll()
            .then((receivedBooks) => {
                const tempShelf=  receivedBooks.filter(book=>book.shelf==='read')
                console.log(tempShelf);
                this.setState(() => ({
                    readBooksList: tempShelf,
                    
                }))
            });
    }

    componentDidMount() {

        this.loadcurrentlyReadingBooksList();
        this.loadreadBooksList();
        this.loadwantToReadBooksList();
    }

    componentDidUpdate(){
        console.log('componentDidUpdate ... ')

    }

    


    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <BooksList booklist={this.state.currentlyReadingBooksList} title={'Currently Reading'}   />
                    <BooksList booklist={this.state.wantToReadBooksList} title={'Wants To Read'}  />
                    <BooksList booklist={this.state.readBooksList} title={'Read'}  />
                </div>
            </div>
        )
    }

}
export default BooksShelves;