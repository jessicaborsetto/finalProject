import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";

// Definizione dell'interfaccia per i dati del lavoro
type  JobData ={
  _id: string;
  company_name: string;
  url: string;
  title: string;
}

const CompanySearchResults: React.FC = () => {
  // Dichiarazione dello stato per i lavori
  const [jobs, setJobs] = useState<JobData[]>([]);
  // Estrazione dei parametri dalla URL utilizzando il React Router Hook 'useParams'
  const params = useParams<{ company: string }>();

  // Definizione dell'endpoint di base per le chiamate API
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  // Utilizzo di useEffect per effettuare la chiamata API al caricamento del componente
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Funzione asincrona per ottenere i lavori dalla API
  const getJobs = async () => {
    try {
      // Effettua una chiamata API utilizzando l'endpoint base e il parametro 'company' dalla URL
      const response = await fetch(baseEndpoint + params.company);
      
      // Se la risposta è positiva (status code 200), elabora i dati
      if (response.ok) {
        const { data } = await response.json();
        
        // Utilizza il setter dello stato per aggiornare i lavori con i nuovi dati
        setJobs(data);
      } else {
        // Se la risposta non è positiva, mostra un messaggio di errore
        alert("Error fetching results");
      }
    } catch (error) {
      // Gestisci gli errori eventuali mostrandoli nella console
      console.log(error);
    }
  };

  // Rende la struttura JSX del componente
  return (
    <Container>
      <Row>
        <Col className="my-3">
          {/* Mostra il titolo della pagina con il nome della company dalla URL */}
          <h1 className="display-4">Job posting for: {params.company}</h1>
          
          {/* Mappa attraverso la lista di lavori e mostra ciascun lavoro utilizzando il componente Job */}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
