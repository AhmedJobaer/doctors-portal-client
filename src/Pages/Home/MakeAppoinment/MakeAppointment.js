import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appointment})`,
                borderRadius: `10px`
            }}
        >
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row lg:p-0 ">
                    <img src={doctor} className="-mt-32 lg:w-1/2 hidden md:block rounded-lg " alt='' />
                    <div>
                        <h4 className='text-lg text-white text-primary font-bold'>Appointment</h4>
                        <h1 className="text-4xl text-white font-bold">Make An Appointment Today</h1>
                        <p className="py-6  text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/appointment'><PrimaryButton>Make Appointment</PrimaryButton></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;