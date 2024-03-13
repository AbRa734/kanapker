'use client';

import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'
import SinglePopularSandwich from "../components/SinglePopularSandwich";
import {kanapka1, kanapka2, kanapka3, kanapka4} from "../lib/data";

function PopularSandwiches() {
    return (
        <section className="px-6 mt-10">
            <h3 className="text-xl mb-3">Popularne kanapki</h3>
            <section className="flex justify-between">
                <ScrollContainer className="flex w-full overflow-x-scroll">
                    <SinglePopularSandwich sandwich={kanapka1}/>
                    <SinglePopularSandwich sandwich={kanapka2}/>
                    <SinglePopularSandwich sandwich={kanapka3}/>
                    <SinglePopularSandwich sandwich={kanapka4}/>
                </ScrollContainer>
            </section>
        </section>
    );
}

export default PopularSandwiches;