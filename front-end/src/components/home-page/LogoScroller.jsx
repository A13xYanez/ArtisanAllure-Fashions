import React from 'react';
import Marquee from 'react-fast-marquee';
import { SiPuma } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { SiThenorthface } from "react-icons/si";
import { SiAdidas } from "react-icons/si";

export default function LogoScroller() {
    return (
        <section className='infinite-logo-scroller'>
            <Marquee pauseOnHover speed={160}>
                <div className='logos-container'>
                    <SiPuma className='scroller-logo-icon' />
                    <SiNike className='scroller-logo-icon' />
                    <SiThenorthface className='scroller-logo-icon' />
                    <SiAdidas className='scroller-logo-icon' />
                </div>
            </Marquee>
        </section>
    )
};