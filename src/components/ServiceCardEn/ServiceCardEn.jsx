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
        icon: <Medical className="h-20" fill='#FFD484' />
    },
    {
        id: 2,
        title: 'Life at Golden Age Care',
        body: `We want to offer comfort and the feeling of "home" and that's why we want to welcome seniors in a warm and pleasant environment. Our rooms are decorated in a welcoming style and the common visiting areas, restaurant and library offer a comfortable place to spend your free time. We also have a generous landscaped outdoor space with a park, gazebo and courtyard for outdoor walks and activities.`,
        icon: <Heart className="h-20" fill='#FFD484' />
    },
    {
        id: 3,
        title: 'Personalized nutrition',
        body: `Within the building we have our own kitchen and dining room and together with the nutritionist's instructions we will ensure that all beneficiaries enjoy nutritious, high-quality and tasty food. We will of course also respect the doctor's recommendations and prohibitions and offer customized alternatives.`,
        icon: <Food className="h-20" fill='#FFD484' />
    },
    {
        id: 4,
        title: 'Activities for seniors',
        body: 'Within the hostel we organize recreational activities such as communication and knowledge games, games of dexterity, movie nights, evenings, celebrating birthdays, board games and trips for the able-bodied. We also offer many spaces suitable for individual activities and relaxation.',
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