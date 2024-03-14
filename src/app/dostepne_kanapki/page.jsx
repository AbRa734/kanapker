'use client';
import React from 'react';
import SinglePopularSandwich from "../../components/SinglePopularSandwich";
import {kanapka1, kanapka2, kanapka3, kanapka4, kanapka5, kanapka6, kanapka7, kanapka8} from "../../lib/data";

function Page() {
    return (
        <main className="max-w-[1024px] mx-auto">
            <section className="px-6 mt-10">
                <h3 className="text-xl mb-3">Dostępne kanapki</h3>
                <section className="flex justify-between">
                    <SinglePopularSandwich sandwich={kanapka1}/>
                    <SinglePopularSandwich sandwich={kanapka2}/>
                    <SinglePopularSandwich sandwich={kanapka3}/>
                    <SinglePopularSandwich sandwich={kanapka4}/>
                </section>
                <section className="flex justify-between mt-10">
                    <SinglePopularSandwich sandwich={kanapka5}/>
                    <SinglePopularSandwich sandwich={kanapka6}/>
                    <SinglePopularSandwich sandwich={kanapka7}/>
                    <SinglePopularSandwich sandwich={kanapka8}/>
                </section>
            </section>
        </main>
    );
}

export default Page;