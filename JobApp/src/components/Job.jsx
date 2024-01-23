import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  addCompanyToFavorites,
  removeCompanyFromFavorites,
} from "../redux/FavSlice";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const { companies: favoriteCompanies } = useSelector(
    (state) => state.favorites
  );

  const isFavorite = (jobData) =>
    favoriteCompanies.some(
      (fav) => fav.id === `${jobData.company}-${jobData.title}`
    );

  const toggleFavorite = (jobData) => {
    const companyAndJob = {
      id: `${jobData.company}-${jobData.title}`,
      company: jobData.company_name,
      title: jobData.title,
    };

    if (isFavorite(jobData)) {
      dispatch(removeCompanyFromFavorites(companyAndJob.id));
    } else {
      dispatch(addCompanyToFavorites(companyAndJob));
    }
  };

  return (
    <Row
      className="mx-0 mt-3 p-3 rounded jobBox"
    >
       <Col xs={2} sm={2} md={2} lg={1}>
        <Button onClick={() => toggleFavorite(data)} className='btnFav rounded-circle'>
          {isFavorite(data) ? <i className="bi bi-heart-fill favIcon"></i> : <i className="bi bi-heart notFav"></i>}
        </Button>
      </Col>
      <Col xs={4} sm={3} md={4} lg={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6} sm={7} md={6} lg={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      
    </Row>
  );
};

export default Job;

