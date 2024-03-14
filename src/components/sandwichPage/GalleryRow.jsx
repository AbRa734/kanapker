import React from 'react';
import {sandwichImagesGallery} from "../../lib/data";
import {Image} from "@nextui-org/react";

function GalleryRow({num1, num2}) {
    return (
        <div className="flex">
            <div className="mr-10 mb-10">
                <Image className="cursor-pointer rounded-2xl" isZoomed={true} src={sandwichImagesGallery[num1]} width={1000}/>
            </div>
            <div>
                <Image className="cursor-pointer rounded-2xl" isZoomed={true} src={sandwichImagesGallery[num2]} width={1000}/>
            </div>
        </div>
    );
}

export default GalleryRow;