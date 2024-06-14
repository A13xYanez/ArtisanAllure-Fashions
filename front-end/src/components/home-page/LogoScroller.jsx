import React from 'react'
import Marquee from 'react-fast-marquee'
import img from './assets/logo4.png'

export default function LogoScroller() {
    return (
        <section className='infinite-logo-scroller'>
            <Marquee pauseOnHover speed={160}>
                <div>
                    <img src={img} />
                </div>
            </Marquee>
        </section>
    )
}