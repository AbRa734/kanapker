import React from 'react';
import { IoMdClose } from "react-icons/io";

function SingleFormLine({item, key}) {
    return (
        <div className="flex justify-between items-center w-full mb-3" key={item?.name+key}>
            <div className="flex items-center">
                <div className="bg-[#E3E3E3] p-1 rounded-xl">
                    <img width={40} src={`${item?.img}`}/>
                </div>
                <p className="mx-5">{item?.name}</p>
            </div>
            <div className="flex items-center">
                <button className="bg-black px-3 py-1 text-white rounded">-</button>
                <p className="mx-7">1</p>
                <button className="bg-black px-2.5 py-1 text-white rounded">+</button>
                <button className="ml-5"><IoMdClose /></button>
            </div>
        </div>
    );
}

export default SingleFormLine;