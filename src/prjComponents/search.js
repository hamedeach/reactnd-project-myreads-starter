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



    searchfunc(userquery) {
        this.setState(() => (
            {
                searchQuery: userquery
            }));
        if (userquery === '') {

            this.loadallbooks();
            this.setState(() => (
                {
                    title: 'All Books'
                }))

        }
        else {
            let searchbooklist =[]
            BooksAPI.search(this.state.searchQuery).then(books => searchbooklist =books);
            console.log(searchbooklist);

            this.setState(() => (
                {
                    stateBooksList:searchbooklist,
                    title: 'Search Result'

                }));
          
        }
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