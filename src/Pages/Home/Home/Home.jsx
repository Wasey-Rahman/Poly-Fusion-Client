import React from 'react';
import TopSlider from '../Top Slider Section/TopSlider';
import { Helmet } from 'react-helmet';
import PopularClasses from '../Popular Classes/PopularClasses';
import PopularInstructors from '../Popular Instructors/PopularInstructors';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Poly-Fusion|Home</title>
            </Helmet>
         <TopSlider></TopSlider>
         <PopularClasses></PopularClasses>
         <PopularInstructors></PopularInstructors>
           
        </div>
    );
};

export default Home;