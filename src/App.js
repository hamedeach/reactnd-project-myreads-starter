import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksShelves from './prjComponents/booksshelves'
import Search from './prjComponents/search'

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: true
    }

    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <div className="list-books">
                        <Search />
                    </div>
                ) : (
                    <div >
                        <BooksShelves />
                        <BooksShelves />
                        <BooksShelves />
                        <div className="open-search">
                            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default BooksApp
