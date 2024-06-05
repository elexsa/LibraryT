import React from "react"


function Buttons({ data })
{
    var content =
        <div className="buttons-wrapper">

            <a className="btn buy-btn" href={data.saleInfo.buyLink != null ? data.saleInfo.buyLink : "#"}>Buy Now</a>
            <a className="btn preview-btn" href={data.accessInfo.webReaderLink != null ? data.accessInfo.webReaderLink : "#"}>Preview</a>
            <a className="btn pdf-btn" href={data.accessInfo.pdf.acsTokenLink != null ? data.accessInfo.pdf.acsTokenLink.replace("http", "https") : "#"}>PDF</a>
            <a className="btn epub-btn" href={data.accessInfo.epub.acsTokenLink != null ? data.accessInfo.epub.acsTokenLink.replace("http", "https") : "#"} >EPUB</a>

        </div>
    return content
}

export default Buttons;