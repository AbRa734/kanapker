import React from 'react';
import Image from "next/image";
import star from "../../public/star.png";

function Stars() {
    return (
        <div className="flex">
            <Image className="p-2" src={star} alt="" width={50} height={20}/>
            <p className="pt-2 py-2 pr-2">5/5</p>
        </div>
    );
}

export default Stars;