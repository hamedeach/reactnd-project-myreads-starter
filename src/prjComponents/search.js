import React, { Component } from "react";
import BooksList from "./bookslist";
import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            booksList: []
        };
    }



    componentDidUpdate(prevProps, prevState) {
        console.log('updating...' + " query = " + this.state.searchQuery);
        console.log(prevState);
        if(prevState.searchQuery ===this.state.searchQuery)return;

        BooksAPI.search(this.state.searchQuery.trim()).then(books => {
            console.log(books);
            let searchlist = [];
            (books === undefined || !Array.isArray(books)) ? searchlist = [] : searchlist = books;
            this.setState(() => ({
                booksList: searchlist,
            }))
        }

        );

    }



    searchfunc(query) {
        console.log("query is :" + query);
        this.setState(() => ({
            searchQuery: query
        }))


    }



    updateShelves = (book) => {

        console.log('search update shelves...')
        this.setState((currentState) => ({
            booksList: currentState.booksList.filter((b) => { return b.id !== book.id })
        }));


    }

    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            value={this.state.searchQuery}
                            onChange={(event) => this.searchfunc(event.target.value)}


                        />
                    </div>
                </div>
                <BooksList booklist={this.state.booksList} title={'Searching Results'} updateShelves={this.updateShelves} />
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }



}
export default Search;