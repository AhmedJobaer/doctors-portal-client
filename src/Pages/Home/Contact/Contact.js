import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <section className='mt-32 py-6'
            style={{
                background: `url(${appointment})`,
                borderRadius: `10px`
            }}>
            <div className="text-center ">
                <h1 className="text-xl text-primary font-bold">Contact Us</h1>
                <h1 className="text-4xl text-white mb-4">Stay connected with us</h1>
            </div>
            <div className="hero">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">

                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="subject" className="input input-bordered" />


                            </div>
                            <textarea className="textarea textarea-primary" placeholder="your massage"></textarea>
                            <div className="form-control mt-4">
                                <PrimaryButton>Submit</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Contact;