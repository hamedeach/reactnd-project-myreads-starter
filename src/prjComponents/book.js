import React, { Component } from "react";
import propTypes from "prop-types";
import * as BooksAPI from '../BooksAPI';

class Book extends Component {

    static propTypes = {
        bookobj: propTypes.object.isRequired,

    }

    state = {
        bookstate: 'none',
    }

    changebookstate(newstate) {
        console.log('changebookstate : ' + newstate)
        this.setState(() => ({ bookstate: newstate }))
        console.log(this.props.bookobj);
        BooksAPI.update(this.props.bookobj,this.state.bookstate).then(res=>console.log(res));
    }

    render() {
        const mybook = this.props.bookobj;
        let bg='';
        (mybook.hasOwnProperty('imageLinks') && mybook.imageLinks.hasOwnProperty('thumbnail'))?bg=mybook.imageLinks.thumbnail:bg='';

        return (
            <li key={mybook.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + bg + ')' }}></div>
                        <div className="book-shelf-changer">
                            <select value={this.state.bookstate} onChange={(event) => (this.changebookstate(event.target.value))}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{mybook.title}</div>
                    <div className="book-authors">{mybook.authors[0]}</div>
                </div>

            </li>
        )
    }



}
export default Book;