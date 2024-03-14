import React from 'react';

function SingleCategoryItem({name}) {
    const number = (Math.random()%4+1).toFixed(0);
    const iconName = "icon"+number+".png";

    return (
        <a href="#" className="flex bg-[#E3E3E3] mr-2 p-2 rounded-2xl text-xs min-w-32">
            <img className="mr-2" src={`/${iconName}`} alt="" width={18} height={18}/>
            <span>{name}</span>
        </a>
    );
}

export default SingleCategoryItem;