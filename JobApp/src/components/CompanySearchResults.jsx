import { useEffect,   } from "react";
import { Container, Row, Col,   } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setJobs } from '../redux/CompanySlice'


const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.companySearch);


  const params = useParams();
  // const [selectedJob, setSelectedJob] = useState(null);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <div key={jobData._id}>
              <Job data={jobData} />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
