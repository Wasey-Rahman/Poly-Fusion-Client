import React, { useState } from 'react';
import CardFlip from 'react-card-flip';

const HowWeWork = () => {
    
    const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

    
    
      return (
        <>
        <h2 className="text-center font-bold text-4xl mt-10 mb-10 text-blue-700">How We Work</h2>
        <div
          className="container bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://img.freepik.com/premium-photo/school-classroom-with-chairsdesks-chalkboard_258219-254.jpg?size=626&ext=jpg&ga=GA1.2.1485116626.1686238993&semt=sph)',
          }}
        >
          <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-3 gap-4">
          <CardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="card-front bg-white p-4 rounded shadow" onClick={handleCardClick}>
              <h3 className="text-2xl font-bold"><span className='text-blue-600'>Click</span>1</h3>
            </div>
            <div className="card-back bg-white p-4 rounded shadow" onClick={handleCardClick}>
              <p className="text-lg font-bold">Listen</p>
            </div>
          </CardFlip>

          <CardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="card-front bg-white p-4 rounded shadow" onClick={handleCardClick}>
              <h3 className="text-2xl font-bold text-center">2</h3>
            </div>
            <div className="card-back bg-white p-4 rounded shadow" onClick={handleCardClick}>
              <p className="text-lg font-bold">Teach</p>
            </div>
          </CardFlip>

          <CardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="card-front bg-white p-4 rounded shadow" onClick={handleCardClick}>
              <h3 className="text-2xl font-bold text-center">3</h3>
            </div>
            <div className="card-back bg-white p-4 rounded shadow" onClick={handleCardClick}>
              <p className="text-lg font-bold">Solve</p>
            </div>
          </CardFlip>
        </div>
      </div>
        </div>
      </>
    );
  };

export default HowWeWork;