'use client';
import React from 'react';
import Gallery from "../../components/sandwichPage/Gallery";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {kanapka1, kanapka2, kanapka3, kanapka4, kanapka5, kanapka6, kanapka7, kanapka8} from "../../lib/data";
import { IoStarSharp } from "react-icons/io5";

function Page({params}) {
    const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const number = params.kanapkaId.split('_')[1];
    const sandwichList = [
        kanapka1,
        kanapka2,
        kanapka3,
        kanapka4,
        kanapka5,
        kanapka6,
        kanapka7,
        kanapka8
    ]
    const selectedSandwich = sandwichList[number-1];

    return <section className="flex max-w-[1024px] mx-auto px-6 mt-16">
        <Gallery/>
        <div className="ml-10">
            <div className="flex justify-between items-center">
                <h3 className="text-2xl mb-3">{selectedSandwich?.name}</h3>
                <div className="bg-black text-white px-2 py-1 rounded-xl flex items-center justify-center">
                    <IoStarSharp />
                    <p className="ml-3">5/5</p>
                </div>
            </div>
            <div>
                <p className="font-light mb-5">{selectedSandwich?.description}</p>
                <div className="flex justify-between items-center">
                    <div>Łączna cena: {selectedSandwich?.price}zł</div>
                    <button className="bg-black text-white px-3 py-1.5 rounded-xl">Dodaj do koszyka</button>
                </div>
                <div className="ml-[-20px] mt-10">
                    <Accordion variant="splitted">
                        <AccordionItem key="1" aria-label="Dodatkowe opcje 1" title="Dodatkowe opcje 1">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Dodatkowe opcje 2" title="Dodatkowe opcje 2">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Dodatkowe opcje 3" title="Dodatkowe opcje 3">
                            {defaultContent}
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    </section>

}

export default Page;