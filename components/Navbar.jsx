import React from 'react'
import Link from 'next/link'

export default function navbar() {
    return (
        <header className='flex h-20 bg-[
            
        ]  justify-evenly items-center text-white'>
            <Link href={"/home"} >Accueil</Link>
            <Link href={"/register"} >Registre des personnes</Link>
        </header>
    )
}
