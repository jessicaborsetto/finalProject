import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Definizione dell'interfaccia per i dati del lavoro
type JobData = {
  _id: string;
  company_name: string;
  url: string;
  title: string;
  // Aggiungi altri campi necessari
}

// Proprietà del componente Job
type JobProps ={
  data: JobData;
}

const Job: React.FC<JobProps> = ({ data }) => (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      {/* Utilizza il componente Link per la navigazione interna */}
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9}>
      {/* Utilizza un anchor tag per aprire il link in una nuova scheda */}
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
);

export default Job;