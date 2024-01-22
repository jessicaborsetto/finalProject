// import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Data from "./Data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { useSelector, useDispatch } from 'react-redux';
import { setSearch, setError, setWeather } from '../redux/searchSlice'

function Search({ onSearch }) {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);

  const { search, error, weather } = searchState;

  const api = {
    key: "60500f103a9cf146bfe136985271a802",
    base: "http://api.openweathermap.org/data/2.5/",
  };

  // Stato per la search bar
  // const [search, setSearch] = useState("");
  // const [error, setError] = useState("");

  // const [weather, setWeather] = useState({
  //   name: "",
  //   sys: [{ country: "", sunrise: "", sunset: "" }],
  //   main: [{ temp: "", feels_like: "", humidity: "", temp_min: "", temp_max: "" }],
  //   weather: [{ description: "" }],
  //   wind: [{ speed: "" }],
  // });

  const searchCity = async () => {
    if (search.trim() === "") {
      dispatch(setError("Please enter a city name."));
      return;
    }

    try {
      const response = await fetch(
        `${api.base}weather?q=${search}&units=metric&appid=${api.key}`
      );
      const result = await response.json();

      if (response.ok) {
        dispatch(setWeather(result));
        onSearch(search);
        dispatch(setError(""));
      } else {
        dispatch(setError(`Error: ${result.message}`));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(setError("An error occurred while fetching data."));
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchCity();
  };

  return (
    <>
      <div className="navBar">
        <Container>
          <Row>

            <div className="CurrentData col-12 col-sm-12 col-md-6">
              <Data></Data>
            </div>

            <div className="d-flex justify-content-evenly align-items-center search mb-3">
              <div>
                <Form  onSubmit={handleFormSubmit}>
                  <Form.Control
                    type="search"
                    placeholder="Search the city.."
                    className="me-2 input rounded-pill col-12"
                    value={search}
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                  />
                </Form>
              </div>

              
            </div>
            <div className="error-message col-12">
                {error && <p className="m-0 text-danger">{error}</p>}
              </div>
          </Row>
        </Container>

      </div>



      <div className="myWeather">

        {/* LOCATION */}
        <div>
          <h2>{weather.name}</h2>
          <span>{weather.sys.country}</span>
        </div>

        <hr />

        {/* TEMPERATURE */}
        <div className="d-flex align-items-center my-2">
          <i className="bi bi-thermometer-half me-4"></i>
          {weather.main.temp !== "" && <p className="m-0">  Temperature: {weather.main.temp}°C</p>}
          {weather.main.feels_like !== "" && <small className="m-y mx-4">Feels like: {weather.main.feels_like}°C</small>}
        </div>

        <div className="d-flex align-items-center my-2">
          <i className="bi bi-thermometer me-4"></i>
          {weather.main.temp_min !== "" && <p className="m-0">  Lowest temperature: {weather.main.temp_min}°C</p>}
        </div>

        <div className="d-flex align-items-center my-2">
          <i className="bi bi-thermometer-high me-4"></i>
          {weather.main.temp_max !== "" && <p className="m-0"> Max temperature: {weather.main.temp_max}°C</p>}
        </div>

        {/* UMIDITA */}
        <div className="d-flex align-items-center my-2">
          <i className="bi bi-moisture me-4"></i>
          {weather.main.humidity !== "" && <p className="m-0">  Humidity: {weather.main.humidity}°C</p>}
        </div>

        {/* WIND */}
        <div className="d-flex align-items-center my-2">
          <i className="bi bi-wind me-4"></i>
          {weather.wind.speed !== "" && <p className="m-0">  Wind: {weather.wind.speed} km/h</p>}
        </div>

        {/* SUNRISE */}
        <div className="d-flex align-items-center my-2">
          <i className="bi bi-sunrise-fill me-4"></i>
          {weather.sys.sunrise !== "" && (
            <p className="m-0"> Sunrise: {formatTime(weather.sys.sunrise)}</p>
          )}
        </div>


        {/* SUNSET */}
        <div className="d-flex align-items-center my-2">
          <i className="bi bi-sunset-fill me-4"> </i>
          {weather.sys.sunset !== "" && (
            <p className="m-0"> Sunset: {formatTime(weather.sys.sunset)}</p>
          )}
        </div>


        {/* CONDITION */}
        {weather.weather[0].main !== "" && (
          <p className="m-0"> Weather: {weather.weather[0].description}</p>
        )}

      </div>

    </>
  );
}

export default Search;
