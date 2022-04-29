import React from "react";
import PropTypes from 'prop-types'



const BookAuthors = ({authorsarray}) => {
    return (
    
        authorsarray.map(author => {
          return <div key={author}>{author}</div>
        })
     
    )
   }

   BookAuthors.propTypes = {
    title: PropTypes.string
  }
 

export default BookAuthors;