import React from 'react';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2';
import Contact from '../Contact/Contact';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';



const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Banner2></Banner2>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;