import React from 'react'

const Gallery = () => {

   

    return(
        <div className='form flex-1 px-4 lg:px-0 ml-auto mr-auto max-w-lg justify-center font-sans text-gold font-medium'>

            <form className=' grid grid-cols-1 lg:grid-cols-2 lg:gap-2 gap-y-2 grid-rows-1'>
                <div className='col-span-1 col-start-1'>
                <label>
                    <input  required placeholder='Nume' className=" border-2 px-4 border-[#2b5c44] w-full placeholder:text-[#153626] h-12 rounded-lg focus:border-green-400 bg-transparent" type="text" />
                </label>
                </div>
                <div className='col-span-1 col-start-1 lg:col-start-2'>
                <label>
                    <input required placeholder='Email' className="border-2 px-4 w-full border-[#2b5c44] placeholder:text-[#153626] h-12 rounded-lg focus:border-green-400 bg-transparent" type="email" />
                </label>
                </div>
                <div className='lg:col-span-2 col-span-1 col-start-1'>
                <label>
                    <textarea required placeholder='Mesaj' className=" w-full border-2 px-4  border-[#2b5c44] placeholder:text-[#153626] h-32 rounded-lg focus:border-green-400 bg-transparent" type="text" />
                </label>
                </div>
               <div>
               <button className='row-start-3 bg-gold rounded-xl h-10 w-32 text-pine font-semibold font-sans col-span-full'>
                    Trimite
                </button>
               </div>
            </form>
        </div>
    )
}

export default Gallery;