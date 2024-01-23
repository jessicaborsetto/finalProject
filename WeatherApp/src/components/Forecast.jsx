import React, { useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import SingleDay from "./SingleDay";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useDispatch, useSelector } from 'react-redux';
import { setForecast, setForecastLoading, setForecastError } from '../redux/forecastSlice'
//importazione 


function Forecast({ search }) {
  // const [forecast, setForecast] = useState(null); ------- vecchio stato

  // selezione dello stato redux e del dispatch collegato
  const dispatch = useDispatch();
  const forecast = useSelector(state => state.forecast.data); //-->

  //raccolta dei dati api ad ogni aggiornamento del search/dispatch --> rimontaggio all'aggiornamento delle dipendenze
  useEffect(() => {

    //preparazione della chiamata API
    const apiForecast = {
      key: "60500f103a9cf146bfe136985271a802",
      base: "http://api.openweathermap.org/data/2.5/",
    };

    const url = `${apiForecast.base}forecast?q=${search}&units=metric&appid=${apiForecast.key}`

    const fetchData = async () => {
      dispatch(setForecastLoading())
      try {

        const response = await fetch(url);
        const result = await response.json();
        const currentDate = new Date();

        // filtra le previsioni che corrispondono ai prossimi giorni:
        // il risultato dell'api c'è oppure no? c'è: filtra / non c'è: []
        const filteredForecast = (result.list && result.list.length > 0) ? result.list.filter((forecastItem) => {
          // ottieni la data della previsione fornito nella risposta API (.dt_txt)
          const forecastDate = new Date(forecastItem.dt_txt);

          // calcola la differenza di tempo tra la data della previsione e la data corrente (in modo da togliere le carte in base alle ore/giorni già trascorse/i)
          const timeDifference = forecastDate.getTime() - currentDate.getTime();
          const daysDifference = timeDifference / (1000 * 3600 * 24);

          // mostra solo le previsioni per i prossimi 7 giorni
          return daysDifference >= 0 && daysDifference < 7;
        }): [];

        dispatch(setForecast(filteredForecast));        //mostra lo stato

      } catch (error) {
        dispatch(setForecastError(error.message));      //in caso di errore
      }
    };
    //chiama la funzione
    fetchData();
  }, [search, dispatch]);

  // preparo la prop per il grafico:
  const data = (forecast && forecast.length > 0) ? forecast.map((forecastItem) => ({
    key: forecastItem.dt_txt || '',               //chiave univoca della prop
    name: forecastItem.dt_txt || '',              //nome associato a ogni previsione
    temperature: forecastItem.main.temp || 0,     //temperatura della previsione
  })) : [];

  return (
    <>

      {/* GRAFICO */}
      <Container>
        <Row>
          <Col className="d-none d-md-block graficBox">
            <h3 className="title mb-4">Temperature:</h3>
            <div className="grafic">
              <LineChart width={1000} height={220} data={data}  >
                <XAxis dataKey="name"  />
                <YAxis />
                <CartesianGrid stroke="#FFFFFF" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="temperature" stroke="#020024" />
              </LineChart>
            </div>
          </Col>

         
            <h3 className="title my-4">Weekly forecast:</h3>
            {/*applicazione della prop per il componente*/}
            {forecast && <SingleDay key={forecast} forecast={forecast} />}      
        </Row>
      </Container>

    </>
  );
}

export default Forecast;


