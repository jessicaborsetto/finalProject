import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";

// Definizione dei tipi
type  JobData ={
  _id: string;
  company_name: string;
  url: string;
  title: string;
}

const CompanySearchResults: React.FC = () => {
  // Dichiarazione dello stato per i lavori --> React.FC per non scrivere ogni volta i tipi dei dati
  const [jobs, setJobs] = useState<JobData[]>([]);
  // Estrazione dei parametri dalla URL
  const params = useParams<{ company: string }>();

  // CHIAMATA API----------------------------------------------------------------------- 
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  // Utilizzo di useEffect per effettuare la chiamata API al caricamento del componente
  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

// costruzione componente
  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          
          {/* Mappa tutta la lista dei lavori e mostrali utilizzando il componente Job */}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
