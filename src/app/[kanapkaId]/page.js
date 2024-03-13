'use client';
import React from 'react';
import AdditionalIngredients from "../../components/sandwichPage/AdditionalIngredients";
import Gallery from "../../components/sandwichPage/Gallery";
import {Accordion, AccordionItem} from "@nextui-org/react";

function Page({params}) {
    const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return <section className="flex">
        <div>
            <Gallery/>
        </div>
        <div>
            <div>
                <p>Kanapka 1</p>
                <div>* 5/5</div>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis nunc ac dui porttitor, quis lobortis mi semper. Ut ante nisi, accumsan at pharetra ac, accumsan in turpis. Sed sed lectus at nunc aliquet dictum sit amet in velit. Nulla in viverra purus. Proin ligula est, interdum et enim a, bibendum ultrices dolor. In hac habitasse platea dictumst. Curabitur ultrices at massa vitae commodo.</p>
                <AdditionalIngredients/>
                <Accordion variant="splitted">
                    <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>

}

export default Page;