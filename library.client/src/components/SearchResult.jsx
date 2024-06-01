import React from "react";
import "./SearchResult.css"

export const SearchResult = ({ result }) => {
    let linkToPreview =  "https://"+location.hostname + "/preview?id=" +  result.id
    return (
        <a className="search-result" href={linkToPreview}>
            {result.volumeInfo.title.length > 40 ? result.volumeInfo.title.substr(0, 39) + "..." : result.volumeInfo.title}
        </a>
    )
}
