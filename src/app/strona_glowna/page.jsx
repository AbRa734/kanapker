import React from 'react';
import {Image} from "@nextui-org/react";
import MainPageImageRow from "../../components/mainPage/MainPageImageRow";

function Page() {
    return (
        <main className="max-w-[1024px] mx-auto">
            <section className="mx-6 mt-10 bg-[url('/bg.png')] bg-cover">
                <h3 className="text-2xl">Nasze kanapki,</h3>
                <h2 className="text-3xl font-bold mb-3">Twój uśmiech!</h2>
                <div className="flex">
                    <p className="max-w-sm text-justify mr-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque, tortor id condimentum porta, ipsum enim dignissim nunc, hendrerit aliquam arcu felis rhoncus velit. Phasellus sed sodales mauris. Aenean cursus, ligula at pharetra maximus, elit ligula molestie odio, nec semper mi libero id nunc. Morbi a nulla tincidunt, viverra lectus a, semper mauris.</p>
                    <p className="max-w-sm text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque, tortor id condimentum porta, ipsum enim dignissim nunc, hendrerit aliquam arcu felis rhoncus velit. Phasellus sed sodales mauris. Aenean cursus, ligula at pharetra maximus, elit ligula molestie odio, nec semper mi libero id nunc. Morbi a nulla tincidunt, viverra lectus a, semper mauris.</p>
                </div>
                <button className="mb-10 mt-5 bg-black text-white px-3 py-1.5 rounded-xl flex justify-center items-center">Zapoznaj się z ofertą</button>
            </section>
            <section className="mx-6 block md:flex items-center">
                <div className="hidden md:block min-w-96">
                    <MainPageImageRow/>
                    <MainPageImageRow/>
                    <MainPageImageRow/>
                </div>
                <div className="ml-10">
                    <h3 className="text-4xl mb-5">Nasze menu</h3>
                    <p className="text-justify mr-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque, tortor id condimentum porta, ipsum enim dignissim nunc, hendrerit aliquam arcu felis rhoncus velit. Phasellus sed sodales mauris. Aenean cursus, ligula at pharetra maximus, elit ligula molestie odio, nec semper mi libero id nunc. Morbi a nulla tincidunt, viverra lectus a, semper mauris.</p>
                    <p className="text-justify mt-5 mr-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque, tortor id condimentum porta, ipsum enim dignissim nunc, hendrerit aliquam arcu felis rhoncus velit. Phasellus sed sodales mauris. Aenean cursus, ligula at pharetra maximus, elit ligula molestie odio, nec semper mi libero id nunc. Morbi a nulla tincidunt, viverra lectus a, semper mauris.</p>
                    <button className="mb-10 mt-5 bg-black text-white px-3 py-1.5 rounded-xl flex justify-center items-center">Zapoznaj się z ofertą</button>
                </div>
            </section>
        </main>
    );
}

export default Page;