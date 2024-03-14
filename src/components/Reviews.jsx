import React from 'react';
import Image from "next/image";
import person1 from "../../public/person1.png";
import person2 from "../../public/person2.png";
import person3 from "../../public/person3.png";
import star from "../../public/star.png";
import {Link} from "@nextui-org/react";

function Reviews() {
    return (
        <div className="md:flex mt-7 justify-between">
            <div className="flex">
                <Image src={person1} alt="" width={40} height={40}/>
                <Image className="ml-[-10px]" src={person2} alt="" width={40} height={40}/>
                <Image className="ml-[-10px]" src={person3} alt="" width={40} height={40}/>
                <div className="flex">
                    <Image className="p-2" src={star} alt="" width={40} height={40}/>
                    <p className="pt-2 py-2 pr-2">5/5</p>
                </div>
            </div>
            <Link href="/kanapka_1" className="mt-5 md:mt-0 rounded-xl bg-black text-white p-2 px-7">Sprawdź teraz!</Link>
        </div>
    );
}

export default Reviews;