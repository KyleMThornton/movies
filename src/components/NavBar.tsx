import link from 'next/link'

export default function NavBar() {
    return (
        <div className='bg-blue-100'>
            <nav className='container flex justify-between p-8 items-center'>
                <ul className='flex cursor-pointer'>
                    <li className='px-2 hover:font-bold'>Movies</li>
                    <li className='px-2 hover:font-bold'>TV</li>
                    <li className='px-2 hover:font-bold'>People</li>
                    <li className='px-2 hover:font-bold'>Dark/Light</li>
                </ul>
                <div className='flex join'>
                    <input type="text" className='input input-bordered join-item w-80' />
                    <button className='btn join-item'>Search</button>
                </div>
            </nav>
        </div>
    )
}