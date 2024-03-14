import React from 'react';
import {Image} from "@nextui-org/react";

function MainPageImageRow() {
    return (
        <div className="flex">
            <Image
                width={600}
                alt="NextUI hero Image"
                src="/mainImage1.png"
                className="pr-2 pb-2"
            />
            <Image
                width={600}
                alt="NextUI hero Image"
                src="/mainImage2.png"
                className="pr-2 pb-2"
            />
        </div>
    );
}

export default MainPageImageRow;