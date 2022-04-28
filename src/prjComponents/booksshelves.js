import React, { Component } from "react";
import BooksList from "./bookslist";
import * as BooksAPI from '../BooksAPI';
//import { Link } from 'react-router-dom';8

class BooksShelves extends Component {

    state = {
        currentlyReadingBooksList: [],
        wantToReadBooksList: [],
        readBooksList: [],
    }

    loadcurrentlyReadingBooksList() {
        BooksAPI.getAll()
            .then((receivedBooks) => {
                const tempShelf = receivedBooks.filter(book => book.shelf === 'currentlyReading')
                console.log(tempShelf);
                this.setState(() => ({
                    currentlyReadingBooksList: tempShelf,

                }))
            });
    }

    loadwantToReadBooksList() {
        BooksAPI.getAll()
            .then((receivedBooks) => {
                const tempShelf = receivedBooks.filter(book => book.shelf === 'wantToRead')
                console.log(tempShelf);
                this.setState(() => ({
                    wantToReadBooksList: tempShelf,

                }))
            });
    }


    loadreadBooksList() {
        BooksAPI.getAll()
            .then((receivedBooks) => {
                const tempShelf = receivedBooks.filter(book => book.shelf === 'read')
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

    componentDidUpdate() {
        console.log('componentDidUpdate ... ')

    }

    updateShelves = (book, oldshelve, newshelf) => {
        console.log('updating shelves was invoked !!')
        console.log(book);
        console.log(oldshelve);
        console.log(newshelf);

        if (oldshelve === 'currentlyReading') this.removefromCurrentReadingShelve(book);
        else if (oldshelve === 'wantToRead') this.removefromWantToReadShelve(book);
        else if (oldshelve === 'read') this.removefromReadShelve(book);

        if (newshelf === 'currentlyReading') this.movetoCurrentReadShelve(book);
        else if (newshelf === 'wantToRead') this.movetoWantToReadShelve(book);
        else if (newshelf === 'read') this.movetoReadShelve(book);



    }

    removefromCurrentReadingShelve(book) {
        this.setState((currentState) => ({
            currentlyReadingBooksList: currentState.currentlyReadingBooksList.filter((b) => { return b.id !== book.id })
        }));
    }

    removefromWantToReadShelve(book) {
        this.setState((currentState) => ({
            wantToReadBooksList: currentState.wantToReadBooksList.filter((b) => { return b.id !== book.id })
        }));
    }

    removefromReadShelve(book) {
        this.setState((currentState) => ({
            readBooksList: currentState.readBooksList.filter((b) => { return b.id !== book.id })
        }));

    }

    movetoCurrentReadShelve(book) {
        this.setState((currentState) => ({
            currentlyReadingBooksList: [...currentState.currentlyReadingBooksList, book]
        }));

    }

    movetoWantToReadShelve(book) {
        this.setState((currentState) => ({
            wantToReadBooksList: [...currentState.wantToReadBooksList, book]
        }));
    }

    movetoReadShelve(book) {
        this.setState((currentState) => ({
            readBooksList: [...currentState.readBooksList, book]
        }));

    }



    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <BooksList booklist={this.state.currentlyReadingBooksList} title={'Currently Reading'} updateShelves={this.updateShelves} />
                    <BooksList booklist={this.state.wantToReadBooksList} title={'Wants To Read'} updateShelves={this.updateShelves} />
                    <BooksList booklist={this.state.readBooksList} title={'Read'} updateShelves={this.updateShelves} />
                </div>
               

            </div>
        )
    }

}
export default BooksShelves;