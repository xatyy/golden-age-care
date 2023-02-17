import React from 'react'
import Logo from '../Logo/Logo';
import Medical from '../Medical/Medical';
import Heart from '../Heart/Heart';
import Food from '../Food/Food';
import Puzzle from '../Puzzle/Puzzle';
const services = [
    {
        title: 'Îngrijire și servicii medicale',
        body: 'În momentul cazării, fiecărui senior i se realizează o evaluare de către un cadru medical și îi este creat un dosar unde îi sunt luate în evidență afecțiunile și problemele medicale sau psihologice. Ulterior, rezidenții beneficiază de vizite regulate ale medicului și primesc toată asistența necesară.',
        icon: <Medical className="h-20" fill='#FFD484' />
    },
    {
        title: 'Viața la Golden Age Care',
        body: 'Confortul și bunăstarea seniorilor noștri sunt întotdeauna pe primul plan. Mai mult decât un cămin de bătrâni lângă București, Perla Senior devine noua casă pentru persoanele pe care avem onoarea de a le îngriji și, de aceea, pentru noi este esențial ca mediul să fie mereu unul plăcut, iar decorul să fie primitor, cald și liniștitor.',
        icon: <Heart className="h-20" fill='#FFD484' />
    },
    {
        title: 'Alimentație personalizată',
        body: 'Alimentația seniorilor este atent urmărită și preparată după nevoile specifice vârstei sau afecțiunilor fiecăruia în parte, în propria noastră bucătărie. Rezidenții căminului de bătrâni Perla Senior Snagov primesc zilnic trei mese și două gustări, din alimente proaspete și de bună calitate, personalizate în același timp după recomandările sau interdicțiile medicale.',
        icon: <Food className="h-20" fill='#FFD484' />
    },
    {
        title: 'Activități pentru seniori',
        body: 'Zonele destinate activităților recreative, atât la interior, cât și la exterior, sunt amenajate pentru a încuraja interacțiunea și a spori sentimentul de apartenență la grup al seniorilor, oferindu-le în același timp spațiu pentru activități sau relaxare individuală. Organizăm în căminul de bătrâni proiecții de film, serate, aniversări și petreceri, precum și vizite la obiective din zonă, pentru seniorii care sunt apți pentru aceste activități.',
        icon: <Puzzle className="h-20" fill='#FFD484' />
    }
]

const ServiceCard = () => {
    return(
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 lg:px-18 px-2 md:grid-cols-2 2xl:grid-cols-2 gap-10 lg:gap-24'>
                {services.map((ser) => (
                     <div className='h-auto lg:w-[530px] w-full border-[#153626] border-[3px]  rounded-2xl'>
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