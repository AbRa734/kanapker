'use client';

import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'
import SinglePopularSandwich from "../components/SinglePopularSandwich";
import {kanapka5, kanapka6, kanapka7, kanapka8} from "../lib/data";

function PopularSandwiches() {
    return (
        <section className="px-6 mt-10">
            <h3 className="text-xl mb-3">Najlepsze kanapki</h3>
            <section className="flex justify-between">
                <ScrollContainer className="flex w-full overflow-x-scroll">
                    <SinglePopularSandwich sandwich={kanapka5}/>
                    <SinglePopularSandwich sandwich={kanapka6}/>
                    <SinglePopularSandwich sandwich={kanapka7}/>
                    <SinglePopularSandwich sandwich={kanapka8}/>
                </ScrollContainer>
            </section>
        </section>
    );
}

export default PopularSandwiches;