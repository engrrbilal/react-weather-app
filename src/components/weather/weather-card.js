import React from 'react'
import Forecast from './forecast'
import TempratureConverter from './temprature-converter'
import TodayForcast from './today-forcast'

const WeatherCard = props => {
  const { weather, forecast, units, onUnitsChange } = props
  return (
    <div className='container mt-5 mx-auto px-2'>
      <div className='md:flex'>
        <div className='flex-1 text-gray-700 text-center bg-gray-100 px-5 py-5 m-2 rounded'>
          {/* Displaying today forcast whether */}
          <TodayForcast weather={weather} units={units} />
          {/* Displaying days of forcast whether */}
          <Forecast forecast={forecast} />
        </div>
        <div className='flex-1 text-gray-700 text-center bg-gray-100 px-5 py-5 m-2 rounded'>
          <TempratureConverter units={units} onUnitsChange={onUnitsChange} />
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
