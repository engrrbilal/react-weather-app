import { API_KEY, BASE_URL } from '../constants/api'
import { mapDataToWeatherInterface } from '../utills/weather'

/* Fetch today whether */
export const fetchTodayWeather = async (location, units) => {
  try {
    let url = `${BASE_URL}/weather/?q=${location}&units=${units}&APPID=${API_KEY}`
    const response = await fetch(url)
    const weather = await response.json()
    if (response.ok) {
      if (Object.entries(weather).length) {
        console.log('#weather : ', weather)
        return mapDataToWeatherInterface(weather)
      }
    } else {
      const error = new Error(`No results for "${location}"`)
      return Promise.reject(error)
    }
  } catch (err) {
    return Promise.reject(error)
  }
}
/* fetch forcast whether data for no of days */
export const fetchWhetherForecast = async (location, units) => {
  let url = `${BASE_URL}/forecast/?q=${location}&units=${units}&APPID=${API_KEY}`
  const response = await fetch(url)
  const forecast = await response.json()
  if (response.ok) {
    if (Object.entries(forecast).length) {
      return forecast.list
        .filter(f => f.dt_txt.match(/09:00:00/))
        .map(mapDataToWeatherInterface)
    }
  } else {
    const error = new Error(`No results for "${location}"`)
    return Promise.reject(error)
  }
}
/* Get location map */
export const getLocationMap = async (location, units) => {
  let url = `api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
  const response = await fetch(url)
  const mapData = await response.json()
  if (response.ok) {
    if (Object.entries(mapData).length) {
      console.log('#mapData : ', mapData)
      // return mapData.list
      //   .filter(f => f.dt_txt.match(/09:00:00/))
      //   .map(mapDataToWeatherInterface)
    }
  } else {
    const error = new Error(`No results for "${location}"`)
    console.log('#error : ', error)
    return Promise.reject(error)
  }
}
