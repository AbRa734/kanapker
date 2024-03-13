import React from 'react';
import kanapka from "../../public/kanapka.png";
import Image from "next/image";
import Reviews from "../components/Reviews";

function Slider() {
    return (
        <section className="sm:flex items-center justify-between mt-20 px-6">
            <div>
                <h2 className="text-5xl">Kanapka dnia</h2>
                <h3 className="text-4xl text-orange-600 font-light">Przykładowa kanapka</h3>
                <Reviews/>
            </div>
            <div className="flex items-center justify-center mt-10">
                <Image src={kanapka} alt="" width={400} height={40}/>
            </div>
        </section>
    );
}

export default Slider;