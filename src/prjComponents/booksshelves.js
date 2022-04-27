import React, { Component } from "react";
import Shelf from "./shelf";

class BooksShelves extends Component {

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div>
                    <Shelf/>
                    <Shelf/>
                    <Shelf/>

                </div>

            </div>
        )
    }

}
export default BooksShelves;