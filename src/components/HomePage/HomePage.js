import React from 'react';

import BootstrapCarousel from '../Carousel/BootstrapCarousel';
import CarList from '../CarList/CarList';
import Service from '../Service/Service';
import About from '../About/About';


const HomePage = () => {
    return (
        <div>
            
            <BootstrapCarousel/>
            <CarList/>
            <Service />
            <About />
            
        </div>
    );
};

export default HomePage;