import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import SingleDay from "./SingleDay";

function Forecast({ search }) {
  const [forecast, setForecast] = useState(null);

  const apiForecast = {
    key: "60500f103a9cf146bfe136985271a802",
    base: "http://api.openweathermap.org/data/2.5/",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch(
          `${apiForecast.base}forecast?q=${search}&units=metric&appid=${apiForecast.key}`
        );
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

        setForecast(filteredForecast);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [search]);

  const data = (forecast || []).map((forecastItem) => ({
    name: forecastItem.dt_txt,
    temperature: forecastItem.main.temp,
  }));

  return (
    <>

      {/* GRAFICO */}
      <h3 className="title mb-4">Temperature:</h3>
      <div className="grafic">
        <LineChart width={1000} height={220} data={data} >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#FFFFFF" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="temperature" stroke="#28288F" />
        </LineChart>
      </div>

      
      <h3 className="title my-4">Weekly forecast:</h3>

      {forecast && <SingleDay forecast={forecast} />}

    </>
  );
}

export default Forecast;


