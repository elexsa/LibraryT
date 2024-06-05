import React from "react";

function Photo({ book }) {
    var content =
        <div className="photo-wrapper">
            <img src={book.volumeInfo.imageLinks != null ? book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/120x180.png?text=no+photo"}></img>
            <p className="book-description">
                Author: {book.volumeInfo.authors != null ? book.volumeInfo.authors : ["not specified"]} <br></br>
                Publisher: {book.volumeInfo.publisher != null ? book.volumeInfo.publisher : "not specified"} <br></br>
                Published Date: {book.volumeInfo.publishedDate != null ? new Date(book.volumeInfo.publishedDate).toDateString() : "not specified"} <br></br>
                Pages: {book.volumeInfo.pageCount != null ? book.volumeInfo.pageCount : "not specified"} <br></br>
                Language: {book.volumeInfo.language != null ? book.volumeInfo.language : "not specified"} <br></br>
                Categories: {book.volumeInfo.categories != null ? book.volumeInfo.categories : "not specified"} <br></br>
                Price: {book.saleInfo.listPrice != null ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`: "not specified"}
            </p>
        </div>
    return content
}

export default Photo;