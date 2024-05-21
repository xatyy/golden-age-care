import React from 'react'
import Medical from '../Medical/Medical';
import Heart from '../Heart/Heart';
import Food from '../Food/Food';
import Puzzle from '../Puzzle/Puzzle';

let x = 0;
const services = [
    {
        id: 1,
        title: 'Îngrijire și servicii medicale',
        body: 'Beneficiarilor li se va face o evaluare inițială în momentul cazării pe baza căreia sunt luate în considerare planul de tratament și consultațiile specializate de care are nevoie pe durata șederii. Toți rezidenții beneficiază de consultații regulate și posibilitatea de a apela la servicii medicale suplimentare oferite de cadre medicale partenere: fizioterapie, kinetoterapie, consulturi psihiatrice sau ședințe cu un psiholog.',
        icon: <Medical className="h-14" fill='#FFD484' />,
        src: 'ingrijire.jpg'
    },
    {
        id: 2,
        title: 'Viața la Golden Age Care',
        body: 'Dorim să oferim confortul și sentimentul de “acasă” și de aceea vrem să îi primim pe seniori într-un mediu călduros și plăcut. Camerele noastre sunt decorate și finisate într-un stil primitor iar spațiile comune de vizită, restaurantul și biblioteca oferă un loc confortabil pentru a petrece timpul liber. Avem deasemenea un spațiu generos exterior amenajat cu parc, foișor și curte interioară pentru plimbări și activități exterioare.',
        icon: <Heart className="h-14" fill='#FFD484' />,
        src: 'viata.jpg'
    },
    {
        id: 3,
        title: 'Alimentație personalizată',
        body: 'În cadrul clădirii avem propria bucătărie și sală de mese și împreună cu indicațiile nutriționistului ne vom asigura că toți beneficiarii se bucură de o alimentație nutritivă, calitativă și gustoasă. Vom respecta bineînțeles și recomandările și interdicțiile medicului și vom oferi alternative personalizate.',
        icon: <Food className="h-12" fill='#FFD484' />,
        src: 'alimentatie.jpg'
    },
    {
        id: 4,
        title: 'Activități pentru seniori',
        body: 'În cadrul căminului organizăm activități recreative precum jocuri de comunicare și cunoaștere, jocuri de dexteritate, seri de film, serate, serbarea aniversărilor, jocuri de societate și excursii pentru cei apți. Oferim deasemenea multe spații potrivite pentru activități individuale și relaxare.',
        icon: <Puzzle className="h-14" fill='#FFD484' />,
        src: 'acti.jpg'
    }
]

const ServiceCard = () => {
    return(
        <div className='flex justify-center'>
            <div className='grid md:grid-cols-2 lg:px-18 px-2 2xl:grid-cols-1 gap-10 xl:gap-24 lg:gap-16'>
                {services.map((ser) => (
                     <div key={ser.id} className='grid 2xl:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 h-auto lg:w-[40vw] xl:w-[70vw] w-full bg-[#153626] border-[#153626] border-[3px]  rounded-2xl 2xl:hover:scale-110 duration-300 ease-in-out transition-all'>
                         <div className="w-full">
                         <div className="flex items-center lg:px-10 px-10 space-x-4 md:space-x-4 sm:space-x-4 2xl:space-x-0">
                         <p className='text-gold font-sans 2xl:text-4xl font-medium py-7 text-3xl max-w-sm'>{ser.title}</p>
                         <div className="">
                         {ser.icon}
                         </div>
                         </div>
                         <div className=" space-x-2 px-10 lg:px-10 2xl:px-10">
                         <p className='text-gold font-sans 2xl:text-2xl font-medium py-7 text-lg 2xl:max-w-md'>{ser.body}</p>
                         </div>
                        </div>
                        <div className='flex 2xl:justify-end items-end justify-center px-10 py-2 lg:px-0 2xl:px-2'>

                         <img className='2xl:rounded-r-xl h-[40vh] w-full 2xl:h-[80vh] 2xl:w-[30vw] object-cover rounded-xl' src={ser.src} />
                         </div>
                     </div>
                ))}
            </div>
        </div> 
    )
}

export default ServiceCard;