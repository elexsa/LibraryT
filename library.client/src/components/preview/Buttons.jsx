function Buttons({ data }) {
   

    var content =
        <div className="buttons-wrapper">

            <a className="btn buy-btn">Buy Now</a>
            <a className="btn preview-btn" href={`https://play.google.com/books/reader?id=${data.id}`}>Preview</a>

        </div>
    return content
}

export default Buttons;