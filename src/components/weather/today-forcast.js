import React from 'react'
import dayjs from 'dayjs'

import * as recommendations from '../../recommendations'
import * as weatherIcons from '../../icons'
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)
const TodayForcast = ({ weather, units }) => {
  const iconPrefix = `wi wi-`
  const [isMetric, setIsMetric] = React.useState(
    units.match(/metric/i) ? true : false,
  )
  const date = dayjs().isValid(weather?.date) ? weather?.date : ''
  const currentTime = dayjs
    .utc(date)
    .utcOffset(weather?.timezone)
    .format()
  const sunrise = dayjs
    .utc(weather.sunrise)
    .utcOffset(weather?.timezone)
    .format()
  const sunset = dayjs
    .utc(weather?.sunset)
    .utcOffset(weather?.timezone)
    .format()
  const isDay = currentTime > sunrise && currentTime < sunset ? true : false
  const description =
    weather.description.charAt(0).toUpperCase() + weather.description.slice(1)
  const icon =
    iconPrefix +
    weatherIcons.default[isDay ? 'day' : 'night'][weather.icon_id].icon
  const recommendation =
    recommendations.default[isDay ? 'day' : 'night'][weather.icon_id]
      .recommendation
  return (
    <>
      <div className='sm'>
        <p className='tracking-wide text-2xl font-semibold'>
          <span className='text-gray-500'> Today’s Forcast for </span>
          {weather.location}, {weather.country}
        </p>
        <p className='text-gray-500 tracking-wide'>
          {dayjs(date).format('dddd')},{' '}
          {dayjs
            .utc(date)
            .utcOffset(weather.timezone)
            .format('h:mm A')}
          , {description}
        </p>
      </div>
      <div className='flex flex-row justify-between my-8 lg:my-4 text-5xl lg:text-6xl tracking-wide'>
        <span className='mt-6 md:mt-10 text-gray-500 font-light'>
          {weather.temperature}&deg;
          <span className='flex flex-col text-gray-500 font-normal tracking-wide text-base mt-1'>
            Feels like {weather.feels_like}&deg;
          </span>{' '}
        </span>
        <div className='text-8xl sm:text-9xl mt-4 text-indigo-700'>
          <span className={icon}></span>
        </div>
      </div>
      <div className='text-indigo-700 mt-1'>
        <span className='wi wi-strong-wind text-xl'></span>
        <span className='ml-1 mr-2 text-gray-500 tracking-wide'>
          {weather.wind_speed}
          {isMetric ? `m/s` : `mph`} winds
        </span>
        <span className='wi wi-humidity text-xl'></span>
        <span className='ml-1 text-gray-500 tracking-wide'>
          {weather.humidity}% humidity
        </span>
        <div className='mt-10 text-center text-2xl text-gray-500 tracking-wide'>
          {recommendation}
        </div>
      </div>
    </>
  )
}

export default TodayForcast
