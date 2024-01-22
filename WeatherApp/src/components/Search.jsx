import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Data from "./Data";

function Search({ onSearch }) {
  const api = {
    key: "60500f103a9cf146bfe136985271a802",
    base: "http://api.openweathermap.org/data/2.5/",
  };

  // Stato per la search bar
  const [search, setSearch] = useState("");
  const [error, setError] = useState(""); 

  const [weather, setWeather] = useState({
    name: "",
    sys: [{ country: "", sunrise: "", sunset: "" }],
    main: [{ temp: "", feels_like: "", humidity: "", temp_min:"", temp_max:"" }],
    weather: [{ description: "" }],
    wind: [{speed:""}],
  });

  const searchCity = async () => {
    if (search.trim() === "") {
      setError("Please enter a city name.");
      return;
    }

    try {
      const response = await fetch(
        `${api.base}weather?q=${search}&units=metric&appid=${api.key}`
      );
      const result = await response.json();

      if (result.name === undefined || !result.name) {
        setError();
      } else {
        setWeather(result);
        onSearch(search);
        setError("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError();
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  };

  
  return (
    <>
      <Navbar className="navBar">
        <div className="CurrentData">
          <Data></Data>
        </div>
        <div className="d-flex justify-content-between align-items-center search">
          <div>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search the city"
                className="me-2 input rounded-pill"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-dark" onClick={searchCity} className="rounded-circle">
                <i className="bi bi-search searchIcon"></i>
              </Button>
            </Form>
          </div>
        </div>
        <div className="error-message">
            {error && <p className="m-0 text-danger">{error}</p>}
          </div>
      </Navbar>

      <div className="myWeather">

        {/* LOCATION */}
        <div>
          <h2>{weather.name}</h2>
          <span>{weather.sys.country}</span>
        </div>

        <hr  />

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
