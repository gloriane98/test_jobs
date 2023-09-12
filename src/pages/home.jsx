import React from 'react'
import Navbar from '../../components/Navbar'
import Image from "next/image";
import gif from "../../assets/images/gif.gif"


export default function home() {
    return (
        <section>
            <Navbar />

            <div className='w-full h-full items-center'>
                <h1 className='text-[#dd2d7f] pt-8 text-center'>Bienvenu dans le registre de agents</h1>
                <Image src={gif} alt='' className='w-full ' />
            </div>
        </section>
    )
}
