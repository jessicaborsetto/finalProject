import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";

// Definizione dei tipi
type JobData = {
  _id: string;
  company_name: string;
  url: string;
  title: string;
}

const MainSearch: React.FC = () => {
  // Dichiarazione degli stati per la query e i lavori
  const [query, setQuery] = useState<string>("");
  const [jobs, setJobs] = useState<JobData[]>([]);

  // Definizione dell'endpoint di base per le chiamate API
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  // Funzione per gestire il cambiamento dell'input di ricerca
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Funzione per gestire la sottomissione del modulo
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
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

  // Rende la struttura JSX del componente
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            {/* Utilizza il tipo 'text' per l'input di ricerca */}
            <Form.Control type="text" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;