import React from "react";

import ImageGallery from "react-image-gallery";
function Photo({ link }) {

    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    class MyGallery extends React.Component {
        render() {
            return <ImageGallery items={images} />;
        }
    }

    var content =
        <div className="photo-wrapper">
            <img src={link}></img>
            
        </div>
    return content
}

export default Photo;