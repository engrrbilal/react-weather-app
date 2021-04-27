import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from '../about/about';
import WeatherCard from '../../components/weather/weather-card';
import NavBar from '../../components/common/navbar';
import Loading from '../../components/common/loading';
import Search from '../../components/search';
import { fetchTodayWeather, fetchWhetherForecast } from '../../actions/weather';

const Dashboard = () => {
  const [location, setLocation] = useState('Islamabad');
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [weather, setWeather] = useState({});
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [units, setUnits] = useState('metric');

  const handleLocationChange = event => {
    if (event.target.value) {
      setIsSearching(true);
      setSearchText(event.target.value);
    } else {
      setSearchText('');
    }
  };

  const handleUnitsChange = newUnits => {
    setUnits(newUnits);
  };
  /* Setting location for getting data*/
  useEffect(() => {
    if (searchText) {
      setLocation(searchText);
    } else {
      setLocation('Islamabad');
    }
  }, [searchText]);
  /* get today weather  */
  useEffect(() => {
    async function getWeather() {
      setIsSearching(false);
      try {
        const weather = await fetchTodayWeather(location, units);
        setWeather(weather);
      } catch (err) {
        setIsSearching(false);
        setError(err);
      }
    }

    getWeather();
  }, [location, units]);
  /* get no of days forcast weather  */
  useEffect(() => {
    async function getForecast() {
      setIsSearching(false);
      try {
        const forecast = await fetchWhetherForecast(location, units);
        setForecast(forecast);
      } catch (err) {
        setIsSearching(false);
        setError(err);
      }
    }

    getForecast();
  }, [location, units]);
  /* get current location map  */
  //   useEffect(() => {
  //     async function getForecast () {
  //       try {
  //         const currentLocationMapData = await getLocationMap(location, units)
  //         console.log('#currentLocationMapData : ', currentLocationMapData)
  //         // setForecast(forecast)
  //       } catch (err) {
  //         setError(err)
  //       }
  //     }

  //     getForecast()
  //   }, [location, units])

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            {(weather && Object.keys(weather).length) ||
            (forecast && Object.keys(forecast).length) ? (
              <main>
                <div className="mx-auto w-5/6 md:w-full 2xl:max-w-7xl xl:max-w-6xl">
                  <Search
                    location={location}
                    error={error}
                    isSearching={isSearching}
                    onLocationChange={handleLocationChange}
                  />
                  <WeatherCard
                    forecast={forecast}
                    weather={weather}
                    units={units}
                    onUnitsChange={handleUnitsChange}
                  />
                </div>
              </main>
            ) : (
              <Loading />
            )}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default Dashboard;
