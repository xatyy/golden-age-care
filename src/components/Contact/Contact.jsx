import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';

const Gallery = () => {

   const [show, setShow] = useState(false);

   const [disabled, setDisabled] = useState(false);

   const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
    phone: ''
   });

   const onSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    send(
        'service_40hn0hl',
        'template_r94qqby',
        toSend,
        'rwfmfM33bcRyOyKhz'
    ).then(() => {
        window.location.replace('/confirmed');
    }).catch((err) => {
        setDisabled(false);
        console.log('FAILED...', err);
    });
   }

   const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
   }

    return(
        <div className='form flex-1 px-4 lg:px-0 ml-auto mr-auto max-w-lg justify-center font-sans text-gold font-medium'>

            <form onSubmit={onSubmit} className=' grid grid-cols-1 lg:grid-cols-2 lg:gap-2 gap-y-2 grid-rows-1'>
                <div className='col-span-1 col-start-1'>
                    <label>
                        <input  required placeholder='Nume' value={toSend.from_name} name='from_name' onChange={handleChange} className=" border-2 px-4 border-[#2b5c44] w-full placeholder:text-gold placeholder:opacity-40 h-12 rounded-lg focus:border-green-400 bg-transparent" type="text" />
                    </label>
                </div>

                <div className='col-span-1 col-start-1 lg:col-start-2'>
                    <label>
                        <input required placeholder='Email' value={toSend.reply_to} name='reply_to' onChange={handleChange} className="border-2 px-4 w-full border-[#2b5c44] placeholder:text-gold placeholder:opacity-40 h-12 rounded-lg focus:border-green-400 bg-transparent" type="email" />
                    </label>
                </div>

                <div className='lg:col-span-2 col-start-1  col-span-1'>
                    <label>
                        <input required placeholder='Nr. Telefon' value={toSend.phone} name='phone' onChange={handleChange} className="border-2 px-4 w-full border-[#2b5c44] placeholder:text-gold placeholder:opacity-40 h-12 rounded-lg focus:border-green-400 bg-transparent" type="phone" />
                    </label>
                </div>

                <div className='lg:col-span-2 col-span-1 col-start-1'>
                    <label>
                        <textarea required style={{resize:'none'}} placeholder='Mesaj' value={toSend.message} name='message' onChange={handleChange} className=" w-full border-2 px-4  border-[#2b5c44] placeholder:text-gold placeholder:opacity-40 h-32 rounded-lg focus:border-green-400 bg-transparent" type="text" />
                    </label>
                </div>

                <div className='col-start-1 col-span-2'>
                    <label className='flex items-center space-x-5'>
                        <input required type="checkbox" />
                        <p>Sunt de acord cu politica de confidențialitate și cu procesarea datelor personale.</p>
                    </label>
                </div>
               <div className='col-start-1'>
               <button type="submit" disabled={disabled} className='disabled:bg-gray-100 disabled:opacity-30 row-start-3 hover:opacity-80 duration-75 ease-linear bg-gold rounded-xl h-10 w-32 text-pine font-semibold font-sans '>
                    Trimite
                </button>
               </div>
            </form>
            <div hidden={!show} className='w-full py-10 mt-10 rounded-xl bg-gold'>
                <p className='text-pine font-semibold font-sans text-center'>
                    Vă vom contacta in cel mai scurt timp!
                </p>
            </div>
        </div>
    )
}

export default Gallery;