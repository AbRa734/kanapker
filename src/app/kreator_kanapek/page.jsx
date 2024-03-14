import React from 'react';
import Image from "next/image";
import {addional} from "../../lib/data";
import SingleFormLine from "../../components/createSandwich/SingleFormLine";
import {FaShoppingBasket} from "react-icons/fa";

function Page() {
    return (
        <main className="max-w-[1024px] mx-auto">
            <section className="px-6 mt-10 mb-10">
                <h3 className="text-2xl">Stwórz swoją</h3>
                <h2 className="text-3xl font-bold mb-3">wymarzoną kanapkę!</h2>
                <div className="flex mt-10 justify-between items-center">
                    <div className="hidden md:block">
                        <Image src="/kanapkaDecor.png" alt="Kanapka - dekoracja" width="400" height="1000"/>
                    </div>
                    <div>
                        {addional.map((item, i)=><SingleFormLine item={item} key={i}/>)}
                        <div className="flex justify-between items-center mt-10">
                            <div className="bg-[#E3E3E3] rounded-xl px-3 py-1.5"><span className="font-light ">Łączna cena:</span> <span>100zł</span></div>
                            <button className="bg-black text-white px-3 py-1.5 rounded-xl flex justify-center items-center"><FaShoppingBasket className="mr-1.5"/> Finalizuj</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Page;