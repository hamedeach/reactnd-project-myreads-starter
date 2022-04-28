import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksShelves from './prjComponents/booksshelves'
import Search from './prjComponents/search'
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        // showSearchPage: false
    }

    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <Routes >
                        <Route exact path='/search' element={<Search />} >
                        </Route>

                    </Routes>

                </div>


                <div >
                    <Routes>
                        <Route exact path='/' element={<div>
                            <BooksShelves />

                            <div className="open-search">
                                <Link to='/search'>
                                    <button />
                                </Link>
                            </div>
                        </div>} >

                        </Route>
                    </Routes>



                </div>

            </div>
        )
    }
}

export default BooksApp
