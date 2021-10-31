import React from 'react';
import Banner from './Banner/Banner';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;