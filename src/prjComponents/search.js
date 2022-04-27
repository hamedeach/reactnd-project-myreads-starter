import React, { Component } from "react";
import BooksList from "./bookslist";
import * as BooksAPI from '../BooksAPI';

class Search extends Component {


    state = {
        stateBooksList: [],
        searchQuery: '',
        title: ''
    }

    loadallbooks() {
        BooksAPI.getAll()
            .then((receivedBooks) => {
                console.log(receivedBooks);
                this.setState(() => ({
                    stateBooksList: receivedBooks,
                    title: 'All Books'
                }))
            });
    }


    componentDidMount() {

        this.loadallbooks();
    }

    searchforbook() {
        BooksAPI.search(this.state.searchQuery).then(books => {
            console.log(books);
            //(typeof books !== '[object Array]')?console.log(books):console.log('array !!!');
            let searchlist = [];
            (books === undefined|| !Array.isArray(books) ) ? searchlist = [] : searchlist = books;
            this.setState(() => ({
                stateBooksList: searchlist,
                title: 'Search Result'
            }))
        }

        );
    }





    searchfunc(userquery) {
        this.setState(() => (
            {
                searchQuery: userquery
            }));
        (userquery === '')? this.loadallbooks() : this.searchforbook()


    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search">Close</button>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            value={this.state.searchQuery}
                            onChange={(event) => this.searchfunc(event.target.value)}
                        />
                    </div>
                </div>
                <BooksList booklist={this.state.stateBooksList} title={this.state.title} />
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }



}
export default Search;