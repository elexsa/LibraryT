import React from "react";
import "./SearchResult.css"

export const SearchResult = ({ result }) => {

    return (
        <a className="search-result" href={`/preview?id=${result.id}`}>
            {result.volumeInfo.title.length > 40 ? result.volumeInfo.title.substr(0, 39) + "..." : result.volumeInfo.title}
        </a>
    )
}
