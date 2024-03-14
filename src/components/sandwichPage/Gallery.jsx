import React from 'react';
import GalleryRow from "../../components/sandwichPage/GalleryRow";

function Gallery() {
    return (
        <div>
            <GalleryRow num1={0} num2={1}/>
            <GalleryRow num1={2} num2={3}/>
            <GalleryRow num1={4} num2={5}/>
        </div>
    );
}

export default Gallery;