import React from "react";
import "./SearchResult.css"

export const SearchResult = ({ result }) => {
    return (
        <div className ="search-result">
            {result.volumeInfo.title.length > 40 ? result.volumeInfo.title.substr(0, 39) + "..." : result.volumeInfo.title}
        </div>
    )
}
