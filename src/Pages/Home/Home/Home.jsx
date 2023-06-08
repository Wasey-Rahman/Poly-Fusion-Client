import React from 'react';
import TopSlider from '../Top Slider Section/TopSlider';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Poly-Fusion|Home</title>
            </Helmet>
            <TopSlider></TopSlider>
        </div>
    );
};

export default Home;