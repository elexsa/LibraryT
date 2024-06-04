import React from 'react';
import "./SearchResultsListStyles.css"
import { SearchResult } from './SearchResult';
export const SearchResultsList = ({ results }) =>
{   

    if (results != null) {
        return (
            <div className="results-list">
                {
                    results.map((result, id) => {
                        return <SearchResult result={result} key={id} />;
                    })
                }
            </div>
        );
    } else {
        return (
            <div className="results-list">
                <a className="search-result" href="#">
                   No books found
                </a>
            </div>)
    }

}