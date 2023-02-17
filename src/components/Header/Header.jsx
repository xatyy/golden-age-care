import React from 'react'
import Logo from '../Logo/Logo';

const Header = () => {
    return(
        <div className=" mt-4 lg:px-10 px-2 justify-center ">
            <div className="lg:p-4 p-2 w-full border-2 border-opacity-10 items-center flex flex-row bg-pine bg-opacity-40 backdrop-blur-lg border-white rounded-3xl">
                <div>
                    <Logo className="px-10 h-16"/>
                </div>
                <div className='ml-auto flex flex-row space-x-8 px-10'>
                    <p className='font-sans font-medium text-gold'>Acasă</p>
                    <p className='font-sans font-medium text-gold'>Servicii</p>
                    <p className='font-sans font-medium text-gold'>Contact</p>
                </div>
            </div>
        </div>
    )
}

export default Header;