import React from 'react'
import Logo from '../Logo/Logo';
import Arrow from '../Arrow/Arrow';

const Footer = () => {
    const year = new Date().getFullYear()
    return(
        <footer className=' py-10 justify-center flex px-10 bg-black bg-opacity-70 h-[52rem] lg:h-[22rem]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:gap-x-24 sm:gap-x-1 gap-y-0 grid-rows-5 lg:grid-rows-3'>
                <div className='flex items-center  space-x-4'> 
                    <Logo className="h-24" />
                    <p className='font-cotta text-3xl text-gold'>Golden Age Care</p>
                </div>
                <div className='row-start-2 py-6'>
                <div className='text-gold text-2xl font-medium row-start-2 flex items-center'>
                    hello@goldenagecare.ro <Arrow />
                </div>
                <div className='text-gold text-2xl w-full font-medium row-start-3 flex items-center'>
                    Strada Muzelor, Nr.2, Săcălaz<Arrow />
                </div>
                </div>
                <div className='col-start-1 row-start-5 text-gold'>
                        Copyright {year} Golden Age Care
                        </div>
                <div className='row-start-3 col-start-1 lg:row-start-1 lg:col-start-4 lg:col-span-full'>
                <iframe className='rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.4286836248425!2d21.085773915291174!3d45.76259842150402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474542401de60f4d%3A0xbdee711aaec82e29!2sStr.%20Muzelor!5e0!3m2!1sen!2sro!4v1676542961808!5m2!1sen!2sro" width="280" height="280" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
           
        </footer>
    )
}

export default Footer;