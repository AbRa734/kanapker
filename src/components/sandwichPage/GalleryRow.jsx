import React from 'react';
import {sandwichImagesGallery} from "../../lib/data";

function GalleryRow({num1, num2}) {
    return (
        <div className="flex">
            <div className="mr-10 mb-10">
                <img src={sandwichImagesGallery[num1]} width={1000}/>
            </div>
            <div>
                <img src={sandwichImagesGallery[num2]} width={1000}/>
            </div>
        </div>
    );
}

export default GalleryRow;