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
      <Col xs={1}>
      <Button onClick={() => handleRemoveCompany(data.id)} className='btnFav rounded-circle'>
          <i className="bi bi-heart-fill favIcon"></i>
        </Button>
      </Col>
      <Col xs={3}>
        <p>{data.company_name}</p>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default FavoriteJob;