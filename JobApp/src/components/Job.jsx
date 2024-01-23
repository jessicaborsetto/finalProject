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
      company: jobData.company,
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
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        <Button onClick={() => toggleFavorite(data)}>
          {isFavorite(data) ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
