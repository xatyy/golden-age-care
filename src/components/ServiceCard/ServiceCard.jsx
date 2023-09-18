import React from 'react'
import Medical from '../Medical/Medical';
import Heart from '../Heart/Heart';
import Food from '../Food/Food';
import Puzzle from '../Puzzle/Puzzle';
const services = [
    {
        id: 1,
        title: 'Îngrijire și servicii medicale',
        body: 'Beneficiarilor li se va face o evaluare inițială în momentul cazării pe baza căreia sunt luate în considerare planul de tratament și consultațiile specializate de care are nevoie pe durata șederii. Toți rezidenții beneficiază de consultații regulate și posibilitatea de a apela la servicii medicale suplimentare oferite de cadre medicale partenere: fizioterapie, kinetoterapie, consulturi psihiatrice sau ședințe cu un psiholog.',
        icon: <Medical className="h-20" fill='#FFD484' />
    },
    {
        id: 2,
        title: 'Viața la Golden Age Care',
        body: 'Dorim să oferim confortul și sentimentul de “acasă” și de aceea vrem să îi primim pe seniori într-un mediu călduros și plăcut. Camerele noastre sunt decorate și finisate într-un stil primitor iar spațiile comune de vizită, restaurantul și biblioteca oferă un loc confortabil pentru a petrece timpul liber. Avem deasemenea un spațiu generos exterior amenajat cu parc, foișor și curte interioară pentru plimbări și activități exterioare.',
        icon: <Heart className="h-20" fill='#FFD484' />
    },
    {
        id: 3,
        title: 'Alimentație personalizată',
        body: 'În cadrul clădirii avem propria bucătărie și sală de mese și împreună cu indicațiile nutriționistului ne vom asigura că toți beneficiarii se bucură de o alimentație nutritivă, calitativă și gustoasă. Vom respecta bineînțeles și recomandările și interdicțiile medicului și vom oferi alternative personalizate.',
        icon: <Food className="h-20" fill='#FFD484' />
    },
    {
        id: 4,
        title: 'Activități pentru seniori',
        body: 'În cadrul căminului organizăm activități recreative precum jocuri de comunicare și cunoaștere, jocuri de dexteritate, seri de film, serate, serbarea aniversărilor, jocuri de societate și excursii pentru cei apți. Oferim deasemenea multe spații potrivite pentru activități individuale și relaxare.',
        icon: <Puzzle className="h-20" fill='#FFD484' />
    }
]

const ServiceCard = () => {
    return(
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 lg:px-18 px-2 md:grid-cols-2 2xl:grid-cols-2 gap-10 xl:gap-24 lg:gap-16'>
                {services.map((ser) => (
                     <div key={ser.id} className='h-auto lg:w-[470px] xl:w-[520px] w-full border-[#153626] border-[3px]  rounded-2xl'>
                         <div className="flex items-center justify-center space-x-6 lg:px-20 px-10">
                         <p className='text-gold font-sans font-medium py-7 text-3xl max-w-sm'>{ser.title}</p>
                        {ser.icon}
                         </div>
                         <div className="flex items-center justify-center space-x-6 px-10 lg:px-20">
                         <p className='text-gold font-sans font-medium py-7 text-lg max-w-sm'>{ser.body}</p>
                         </div>
                     </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceCard;