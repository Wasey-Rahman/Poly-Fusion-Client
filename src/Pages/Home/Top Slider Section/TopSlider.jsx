import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TopSlider = () => {
  const sliderData = [
    {
      image: 'https://img.freepik.com/free-vector/illustration-language-concept_53876-20610.jpg?size=626&ext=jpg&ga=GA1.2.1485116626.1686238993&semt=sph',
      title: 'Welcome To Our Poly-Fusion Foreign Language School',
      message: 'Unlock a world of language and culture at our school, where fluency and cultural understanding intertwine.',
    },
    {
      image: 'https://img.freepik.com/free-vector/illustration-with-young-people-talking_52683-29824.jpg?size=626&ext=jpg&ga=GA1.2.1485116626.1686238993&semt=sph',
      title: 'Number Of Languages Offered In Our School',
      message: 'We afford 30 languages in this school and still like to explore more for making the communication strong in the world.',
    },
    {
        image: 'https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483336.jpg?size=626&ext=jpg&ga=GA1.2.1485116626.1686238993&semt=sph',
        title: 'Reading,Writing,Speaking And Listening',
        message: 'The school focuses on teaching a combination of skills (reading, writing, speaking, and listening) to enhance the knowledge and development of each student.',
      },
      {
        image: 'https://img.freepik.com/free-vector/tiny-people-teacher-kids-camp-learning-english-chinese_335657-2501.jpg?size=626&ext=jpg&ga=GA1.2.1485116626.1686238993&semt=ais',
        title: 'About Our School',
        message: 'We pride ourselves on providing a nurturing learning environment led by dedicated educators, where we combine our expertise with best practices. Our courses, workshops, and immersive programs are thoughtfully designed to meet the unique needs and goals of every learner.',
      },
  ];

  return (
    <Carousel>
      {sliderData.map((slide, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center">
          <img src={slide.image} alt={`Slider ${index}`} className="w-full md:w-1/2" />
          <div className="w-full md:w-1/2 ml-4">
            <h2 className="text-2xl font-bold">{slide.title}</h2>
            <p className="mt-2">{slide.message}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};



export default TopSlider;