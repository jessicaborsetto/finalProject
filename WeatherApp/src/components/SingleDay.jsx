import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import WeeklyData from './WeeklyData';

function SingleDay({ forecast}) {
  const cardsPerSlide = 4;

  const renderSlides = () => {
    const slides = [];
    for (let i = 0; i < forecast.length; i += cardsPerSlide) {
      const slideCards = forecast.slice(i, i + cardsPerSlide).map((forecastItem) => (
        <div key={forecastItem.id} className="col-12 col-sm-6 col-lg-3 mb-3">
          <Card key={forecastItem.id} className="mr-3 mx-2 card">
            <Card.Body className="dayAcc">
              <WeeklyData date={forecastItem.dt_txt} className="cardDate" />

              <Card.Text>
                <p><b>Weather:</b> <br /> {forecastItem.weather[0].description}</p>
                <p className='m-0'><i className="bi bi-thermometer-half me-4"></i>Temperature: {forecastItem.main.temp}°C</p>
                <small className='italic'>Feels like: {forecastItem.main.feels_like}°C</small>
                <p className='mt-3'><i className="bi bi-moisture me-4"></i>Humidity: {forecastItem.main.humidity}°C</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ));

      slides.push(
        <Carousel.Item>
          
          <div className="d-flex" key={forecast}>{slideCards} </div>
      
        </Carousel.Item>
      );
    }

    return slides;
  };

  return (
    <Carousel interval={null} indicators={false}>
      {renderSlides()}
    </Carousel>
  );
}

export default SingleDay;