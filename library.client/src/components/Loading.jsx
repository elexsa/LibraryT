import React from 'react';
import "./LoadingStyles.css";

function Loading()
{
    var content =
        <div className="loading-wrapper">
            <img className="loader" src="/Book.gif" width="100px"></img>
            <p><b>Loading...</b></p>
    </div>
    return content
}

export default Loading