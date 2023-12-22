"use client";

import Link from 'next/link';
import { useState, useRef } from "react";


export default function NavBar() {
    const [searchbar, setSearchbar] = useState('');
    const searchbarRef = useRef();

    const handleInputUpdate = () => {
        setSearchbar(searchbarRef.current.value);
    }

    return (
        <div className='bg-slate-800'>
            <nav className='container flex flex-col md:flex-row justify-between p-8 items-center'>
                <ul className='flex cursor-pointer pb-5 md:pb-0 text-slate-50 items-center'>
                    <Link href="/"><li className='px-2 text-xl hover:font-bold'>Home</li></Link>
                    <Link href="/search/movie"><li className='px-2 text-xl hover:font-bold'>Movies</li></Link>
                    <Link href="/search/tv"><li className='px-2 text-xl hover:font-bold'>TV</li></Link>
                    <Link href="/search/person"><li className='px-2 text-xl hover:font-bold'>People</li></Link>
                    {/* <li className='px-2 text-xl hover:font-bold'>Dark/Light</li> */}
                </ul>
                <div className='flex join'>
                    <input type="text" ref={searchbarRef} onChange={handleInputUpdate} className='input input-bordered join-item wd-1/3 md:w-80' />
                    <Link href={`/search/${searchbar}`}><button className='btn join-item'>Search</button></Link>
                </div>
            </nav>
        </div>
    )
}