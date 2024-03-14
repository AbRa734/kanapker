'use client';
import React from 'react';
import SingleCategoryItem from "../components/SingleCategoryItem";
import {itemNames} from "../lib/data";
import ScrollContainer from "react-indiana-drag-scroll";

function Categories({classParam}) {
    return (
        <section className={`px-6 ${classParam}`}>
            <h3 className="text-xl mb-3">Kategorie</h3>
            <ScrollContainer className="flex w-full overflow-x-scroll justify-between">
                {itemNames.map((itemName, i)=><SingleCategoryItem key={itemName+i} name={itemName}/>)}
            </ScrollContainer>
        </section>
    );
}

export default Categories;