import React, { useState } from 'react'
import Lightbox from 'react-spring-lightbox'

const img = [
    {
        id: 0,
        src: 'gallery1.webp',
        low: 'gallery1.jpg'
    },
    {
        id: 1,
        src: 'gallery5.webp',
        low: 'gallery5.jpg'
    },
    {
        id: 2,
        src: 'gallery3.webp',
        low: 'gallery3.jpg'
    },
    {
        id: 3,
        src: 'gallery4.webp',
        low: 'gallery4.jpg'
    },
    {
        id: 4,
        src: 'gallery2.webp',
        low: 'gallery2.jpg'
    },
    {
        id: 5,
        src: 'gallery6.webp',
        low: 'gallery6.jpg'
    },
]

const Gallery = () => {

    const [isOpen, setOpen] = useState(false);
    const [currentImageIndex, setCurrentIndex] = useState(2);

    const gotoNext = () => {
        currentImageIndex + 1 < img.length && setCurrentIndex(currentImageIndex + 1);
    }

    const gotoPrevious = () => {
        currentImageIndex > 0  && setCurrentIndex(currentImageIndex - 1);
    }



    return(
        <div className='gallery flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4'>
                {img.map((img, index) => (
                     <div key={img.id} onClick={() => {
                        setCurrentIndex(index);
                        setOpen(true);
                     }} className='h-[250px] w-[350px] overflow-hidden bg-slate-50 rounded-xl sm:hover:scale-105 md:hover:scale-105 lg:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 ease-linear transition-all'>
                     
                         <img  width={400} className=" cursor-pointer overflow-cover scale-[1.2]" src={img.low} />
                     </div>
                ))}
              
            </div>
            <Lightbox
        currentIndex={currentImageIndex}
        isOpen={isOpen}
        onNext={gotoNext}
        onPrev={gotoPrevious}
        onClose={() => setOpen(false)}
        images={img} 
        pageTransitionConfig={{
            from: { transform: "scale(0.75)", opacity: 0 },
            enter: { transform: "scale(1)", opacity: 1 },
            leave: { transform: "scale(0.75)", opacity: 0 },
            config: { mass: 1, tension: 320, friction: 32 }
            }}
        style={{backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", backgroundColor: "rgba(0, 0, 0, .8)"}}
        />
        </div>
       
    )
}

export default Gallery;