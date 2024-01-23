import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { removeCompanyFromFavorites } from '../redux/FavSlice';
import { useDispatch } from 'react-redux';

const FavoriteJob = ({ data }) => {
    const dispatch = useDispatch();


    const handleRemoveCompany = (companyId) => {
    dispatch(removeCompanyFromFavorites(companyId));
  };
  
  return (
    <Row className="mx-0 mt-3 p-3 rounded jobBox">
      <Col xs={2} sm={2} md={2} lg={1}>
        <Button onClick={() => handleRemoveCompany(data.id)} className='btnFav rounded-circle'>
          <i className="bi bi-trash3-fill favIcon"></i>
        </Button>
      </Col>
      <Col xs={4} sm={3} md={4} lg={3}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.company}
        </a>
      </Col>
      <Col xs={6} sm={7} md={6} lg={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default FavoriteJob;