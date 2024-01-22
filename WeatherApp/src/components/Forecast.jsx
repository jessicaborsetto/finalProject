import React, { useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import SingleDay from "./SingleDay";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useDispatch, useSelector } from 'react-redux';
import { setForecast, setForecastLoading, setForecastError } from '../redux/forecastSlice'

function Forecast({ search }) {
  // const [forecast, setForecast] = useState(null);

  const dispatch = useDispatch();
  const forecast = useSelector(state => state.forecast.data);

  useEffect(() => {

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

        // Filtra le previsioni che corrispondono ai prossimi 7 giorni
        const filteredForecast = (result.list ?? []).filter((forecastItem) => {
          const forecastDate = new Date(forecastItem.dt_txt);
          const timeDifference = forecastDate.getTime() - currentDate.getTime();
          const daysDifference = timeDifference / (1000 * 3600 * 24);

          // Mostra solo le previsioni per i prossimi 7 giorni
          return daysDifference >= 0 && daysDifference < 7;
        });

        dispatch(setForecast(filteredForecast));
      } catch (error) {
        // console.error("Error fetching data:", error);
        dispatch(setForecastError(error.message));
      }
    };

    fetchData();
  }, [search, dispatch]);

  const data = (forecast || []).map((forecastItem) => ({
    key: forecastItem.dt_txt || '',
    name: forecastItem.dt_txt || '',
    temperature: forecastItem.main.temp || 0,
  }));

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
            {forecast && <SingleDay key={forecast} forecast={forecast} />}
         
        </Row>
      </Container>

    </>
  );
}

export default Forecast;


