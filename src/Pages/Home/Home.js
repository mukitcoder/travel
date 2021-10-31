import React from 'react';
import Banner from './Banner/Banner';
import SectionOne from './SectionOne/SectionOne';
import SectionThree from './SectionThree/SectionThree';
import SectionTwo from './SectionTwo/SectionTwo';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <SectionThree></SectionThree>
        </div>
    );
};

export default Home;