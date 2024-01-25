import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../redux/CompanySlice";
import Job from "./Job";


const CompanySearchResults = () => {
  //stati precedenti--------------------
  // const [jobs, setJobs] = useState([]);
  // const [selectedJob, setSelectedJob] = useState(null);

  //selector dello state (companySlice.js)- dispatch delle azioni- params per estrarre i parametri
  const { jobs } = useSelector((state) => state.companySearch);
  const dispatch = useDispatch();
  const params = useParams();

  //  API -------------------------------------------------------------------
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
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
    <Container className="mainBox">
      <Row>
        <Col className="my-4">
           {/* Verifica se esiste il parametro 'company' nell'URL e se ci sono lavori disponibili */}
          {params.company && jobs.length > 0 && (
            <>
              <h2 className="title">Job posting for: {params.company}</h2>
               {/* Mappa l'array di lavori e mostra ciascun lavoro utilizzando il componente Job */}
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
