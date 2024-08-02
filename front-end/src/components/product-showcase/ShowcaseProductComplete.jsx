import React from 'react';
import ShowcaseProduct from './ShowcaseProduct';

export default function ShowcaseProductComplete({ setStopScroll }) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    
    return (
        <>
            <ShowcaseProduct setStopScroll={setStopScroll} />
        </>
    )
};