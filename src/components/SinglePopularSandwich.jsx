import React from 'react';

function SinglePopularSandwich({sandwich}) {
    return (
        <div className="justify-end items-end rounded-xl mr-5 w-80 h-52 border-2 flex gap-52 bg-cover cursor-pointer flex-shrink-0 flex-grow-0" style={{backgroundImage:`url("${sandwich?.img}")`}}>
            <div className="flex pl-5 justify-center flex-col opacity-85 h-16 w-full rounded-br-xl text-black bg-gradient-to-r from-white to-stone-300">
                <h5 className="font-semibold text-xl">{sandwich?.name}</h5>
                <p>{sandwich?.number} składników | {sandwich?.time} minut</p>
            </div>
        </div>
    );
}

export default SinglePopularSandwich;