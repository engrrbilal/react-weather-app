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
            ReactWeather is a beautiful weather app built on top of the{' '}
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
          
          <p className="pt-4">
            It's runs on{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>{' '}
            and{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS
            </a>
            . It uses{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://erikflowers.github.io/weather-icons/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Erik Flowers' weather icons
            </a>
          </p>
          <p className="pt-4">
            I utlized the code from 
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://github.com/denniskigen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dennis Kigen 
            </a>
            ,  repositery and refactor it in different folders and break the code in different componenets
          </p>
        </div>
      </section>
    </>
  );
};
export default About;