import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'If a dog chews shoes whose shoes does he choose',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'If a dog chews shoes whose shoes does he choose',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'If a dog chews shoes whose shoes does he choose',
            img: whitening
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h2 className=' text-primary font-bold text-xl'>OUR SERVICES</h2>
                <h3 className='text-3xl'>Services We Provide</h3>
            </div>
            <div className='grid mt-8 gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;