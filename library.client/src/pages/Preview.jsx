import React, { useEffect, useState } from "react";
import Photo from "../components/preview/Photo"
import Buttons from "../components/preview/Buttons"
import Description from "../components/preview/Description"
import "./styles/PreviewPage.css"

 function Preview(){
    let params = new URLSearchParams(document.location.search);
    let bookVolumeId = params.get("id");

    let globalData
    let content
    const [data, setData] = useState([]);
    async function apiResult(id) {
        const res = await fetch("/api/Bookvolumes/GetBookById?id=" + id)
        const data = await res.json()
        globalData = await data
        setData(globalData)
        return globalData
     }

     useEffect(() => {
         apiResult(bookVolumeId)
     }, [])
    
     if (data.length != 0) {
         if (data.volumeInfo.imageLinks == null) {
             photoLink = "https://via.placeholder.com/300x450.png?text=no+photo"
         } else { photoLink = data.volumeInfo.imageLinks.thumbnail }

        content =

            <div className="preview-wrapper">
                <Photo book={data} />
                <Description volumeInfo={data.volumeInfo} />
                <Buttons data={data} />

            </div>
    }

    return content;
};

export default Preview;