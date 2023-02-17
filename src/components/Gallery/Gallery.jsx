import React from 'react'
import Logo from '../Logo/Logo';
import gsap from 'gsap';
import { useRef } from 'react';

const img = [
    'gallery1.webp',
    'gallery5.webp',
    'gallery3.webp',
    'gallery4.webp',
    'gallery2.webp',
    'gallery6.webp'
]

const Gallery = () => {

    const handleClick = ({ currentTarget }) => {

        gsap.to(currentTarget,{
            x:0,
            y:0,
            transformOrigin: "50% 50%",
            width: '100vh',
            height: '100vh'
        })
      }

    return(
        <div className='gallery flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 gap-4'>
                {img.map((img) => (
                     <div onClick={handleClick} className='h-[250px] w-[350px] overflow-hidden bg-slate-50 rounded-xl'>
                         <img width={400} className="overflow-cover scale-[1.2]" src={img} />
                     </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery;