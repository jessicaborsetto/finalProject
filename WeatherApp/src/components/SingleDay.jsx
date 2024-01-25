import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import WeeklyData from './WeeklyData';
//importazioni

const SingleDay = ({ forecast}) => {
//prop ricevuta da forecast.jsx 
//imposto il numero di carte per slide del carosello (a grandezza lg dello schermo)
  const cardsPerSlide = 4;

//CREAZIONE SLIDES
  const renderSlides = () => {
    const slides = [];        //array vuoto che verrà abitato dagli Items


    for (let i = 0; i < forecast.length; i += cardsPerSlide) {
      //i += cardsPerSlide: Dopo ogni iterazione, incrementa l'indice i di cardsPerSlide in modo che il prossimo gruppo di previsioni inizierà subito dopo il gruppo corrente (=  non ci siano sovrapposizioni tra le slide.)

      //CREAZIOENE SLIDE TRAMITE MAP
      const slideCards = forecast.slice(i, i + cardsPerSlide).map((forecastItem) => (
        //forecast.slice(i, i + cardsPerSlide): restituisce una porzione dell'array forecast. I parametri i e i + cardsPerSlide definiscono l'intervallo della fetta:
        // i: l'indice di partenza.
        // i + cardsPerSlide: l'indice finale (non incluso).
        // Quindi, all'interno del ciclo for, viene restituito un sottoinsieme di previsioni che appartengono al gruppo corrente di carte nella slide. Ad esempio, se i è 0 e cardsPerSlide è 4, la fetta restituirà le previsioni dall'indice 0 all'indice 3 (le prime quattro previsioni).
        //queste vengono poi mappate e pushate in modo da riempire l'array

        <div key={forecastItem.id} className="col-12 col-sm-6 col-lg-3 mb-3">
          <Card key={forecastItem.id} className="mr-3 mx-2 card">
            <Card.Body className="dayAcc">
              <WeeklyData date={forecastItem.dt_txt} className="cardDate" />  
              {/* passo la prop e il suo valore a weekly data */}
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
          <div className="d-flex" key={forecast}>{slideCards}</div>  
        </Carousel.Item>
      );
    }

    return slides;
  };

  return (
    <Carousel interval={null} indicators={false}>
      {/* faccio in modo che non ci sia l'autoplay nel carsello + nascondo gli indicatori*/}
      {renderSlides()}
    </Carousel>
  );
}

export default SingleDay;