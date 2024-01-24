import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Definizione dei tipi di JobData e JobProps
type JobData = {
  _id: string;
  company_name: string;
  url: string;
  title: string;
}

type JobProps ={
  data: JobData;
}

const Job: React.FC<JobProps> = ({ data }) => (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      {/* Link per la navigazione interna */}
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
);

export default Job;