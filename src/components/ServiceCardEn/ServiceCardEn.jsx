import React from 'react'
import Medical from '../Medical/Medical';
import Heart from '../Heart/Heart';
import Food from '../Food/Food';
import Puzzle from '../Puzzle/Puzzle';
const services = [
    {
        id: 1,
        title: 'Medical care and services',
        body: 'Beneficiaries will be given an initial evaluation at the time of accommodation, on the basis of which the treatment plan and specialist consultations needed during the stay are taken into account. All residents benefit from regular consultations and the possibility of using additional medical services offered by partner medical personnel: physiotherapy, kinesitherapy, phychiatric consultations or sessions with a psychologist.',
        icon: <Medical className="h-20" fill='#FFD484' />,
         src: 'ingrijire.jpg'
    },
    {
        id: 2,
        title: 'Life at Golden Age Care',
        body: `We want to offer comfort and the feeling of "home" and that's why we want to welcome seniors in a warm and pleasant environment. Our rooms are decorated in a welcoming style and the common visiting areas, restaurant and library offer a comfortable place to spend your free time. We also have a generous landscaped outdoor space with a park, gazebo and courtyard for outdoor walks and activities.`,
        icon: <Heart className="h-20" fill='#FFD484' />,
        src: 'viata.jpg'
    },
    {
        id: 3,
        title: 'Personalized nutrition',
        body: `Within the building we have our own kitchen and dining room and together with the nutritionist's instructions we will ensure that all beneficiaries enjoy nutritious, high-quality and tasty food. We will of course also respect the doctor's recommendations and prohibitions and offer customized alternatives.`,
        icon: <Food className="h-20" fill='#FFD484' />,
        src: 'alimentatie.jpg'
    },
    {
        id: 4,
        title: 'Activities for seniors',
        body: 'Within the hostel we organize recreational activities such as communication and knowledge games, games of dexterity, movie nights, evenings, celebrating birthdays, board games and trips for the able-bodied. We also offer many spaces suitable for individual activities and relaxation.',
        icon: <Puzzle className="h-20" fill='#FFD484' />,
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