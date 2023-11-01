import link from 'next/link'

export default function NavBar() {
    return (
        <nav className='flex justify-between p-10 bg-blue-100'>
            <p>logo</p>
            <ul className='flex cursor-pointer'>
                <li className='px-2 hover:font-bold'>Movies</li>
                <li className='px-2 hover:font-bold'>TV</li>
                <li className='px-2 hover:font-bold'>People</li>
                <li className='px-2 hover:font-bold'>Dark/Light</li>
            </ul>
        </nav>
    )
}