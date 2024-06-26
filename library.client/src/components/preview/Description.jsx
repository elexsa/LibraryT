import React from "react"

function Description({ volumeInfo })
{
    var content =
        <div className="description-wrapper">
            <h1 class="book-title">{volumeInfo.title}</h1>
            <p class="book-description" dangerouslySetInnerHTML={{ __html: volumeInfo.description }} />

        </div>
    return content
}

export default Description;