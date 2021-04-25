import React from 'react';

const About = () => {
  return (
    <>
      <section
        className="shadow-lg rounded-lg max-w-3xl pt-2 mt-12 mx-auto h-auto mb-64"
        style={{ backgroundPositionY: '100%' }}
      >
        <div className="p-4 text-gray-500">
          <h3 className="text-gray-600 text-xl font-medium font-sans">
            About ReactWeather
          </h3>
          <p className="pt-4">
            ReactWeather is a weather app built on top of the{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://openweathermap.com/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenWeatherMap API
            </a>
            .
          </p>
         
        </div>
      </section>
    </>
  );
};

export default About;
