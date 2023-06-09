import React from 'react';
import TopSlider from '../Top Slider Section/TopSlider';
import { Helmet } from 'react-helmet';
import PopularClasses from '../Popular Classes/PopularClasses';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Poly-Fusion|Home</title>
            </Helmet>
         <TopSlider></TopSlider>
         <PopularClasses></PopularClasses>
           
        </div>
    );
};

export default Home;