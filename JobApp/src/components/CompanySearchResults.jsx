import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../redux/CompanySlice";
// import { Link } from "react-router-dom";


const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.companySearch);

  const params = useParams();
  // const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
     // Verifica se il parametro della company è valido
     if (!params.company.name) {
      // Se non è valido, reindirizza direttamente a "/404"
      navigate('*')
      return;
    }

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
    <Container className="mainBox">
      <Row>
        <Col className="my-4">
          {params.company && jobs.length > 0 && (
            <>
              <h2>Job posting for: {params.company}</h2>
              {jobs.map((jobData) => (
                <div key={jobData._id}>
                  <Job data={jobData} />
                </div>
              ))}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
