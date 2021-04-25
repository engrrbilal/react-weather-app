import React from 'react'
import dayjs from 'dayjs'

import * as weatherIcons from '../../icons'

const TempratureConverter = ({ units, onUnitsChange }) => {
  // const [isCelcius, setIsCelcius] = React.useState(
  //   units.match(/metric/i) ? true : false,
  // )
  const [isSettingsMenuOpened, setIsSettingsMenuOpened] = React.useState(false)

  const handleTempratureChange = unit => {
    onUnitsChange(unit)
    // setIsCelcius(!isCelcius)
  }
  return (
    <div className='sm'>
      <div
        className='origin-top mt-2  rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='user-menu'
      >
        <p className='tracking-wide text-2xl font-semibold'>
          <span className='text-gray-500'> Temprature Converter </span>
        </p>
        <ul>
          <li
            className='block px-4 py-4 text-sm text-gray-700 hover:bg-gray-100'
            role='menuitem'
          >
            Change Temprature units
            <br />
            <button
              onClick={() => handleTempratureChange('metric')}
              className='bg-blue-300 w-34 hover:bg-blue-400 text-white font-bold py-2 m-2 px-4 rounded'
            >
              Celcius (C°)
            </button>
            <button
              onClick={() => handleTempratureChange('imperial')}
              className='bg-blue-300 w-34 hover:bg-blue-400 text-white font-bold py-2 m-2 px-4 rounded'
            >
              Fahrenheit (F°)
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TempratureConverter
