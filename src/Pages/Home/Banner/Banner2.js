import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Banner2 = () => {
    return (
        <div>
            <div>
                <div className="hero mt-16 ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='lg:w-1/2'>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms!</h1>
                            <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                        </div>
                        <img src={treatment} className=" rounded-lg lg:w-1/2 lg:h-[500px] shadow-2xl lg:mr-12" alt='' />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;