"use client";

import Link from 'next/link';
import { useState, useRef } from "react";
import { useRouter } from 'next/navigation';

export default function NavBar() {
    const [searchbar, setSearchbar] = useState('');
    const searchbarRef = useRef();
    const router = useRouter()

    const handleInputUpdate = () => {
        setSearchbar(searchbarRef.current.value);
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if(searchbar !== '') router.push(`/search/${searchbar}`)
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
                <form onSubmit={handleSubmit}>
                    <div className='flex join'>
                        <input type="text" ref={searchbarRef} onChange={handleInputUpdate} className='input input-bordered join-item wd-1/3 md:w-80' />
                        <button type="submit" className='btn join-item'>Search</button>
                    </div>
                </form>
            </nav>
        </div>
    )
}