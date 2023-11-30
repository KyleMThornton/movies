import link from 'next/link'

export default function NavBar() {
    return (
        <div className='bg-slate-800'>
            <nav className='container flex flex-col md:flex-row justify-between p-8 items-center'>
                <ul className='flex cursor-pointer pb-5 md:pb-0 text-slate-50'>
                    <li className='px-2 text-xl hover:font-bold'>Movies</li>
                    <li className='px-2 text-xl hover:font-bold'>TV</li>
                    <li className='px-2 text-xl hover:font-bold'>People</li>
                    <li className='px-2 text-xl hover:font-bold'>Dark/Light</li>
                </ul>
                <div className='flex join'>
                    <input type="text" className='input input-bordered join-item wd-1/3 md:w-80' />
                    <button className='btn join-item'>Search</button>
                </div>
            </nav>
        </div>
    )
}