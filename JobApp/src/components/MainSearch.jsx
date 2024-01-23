import { Container, Row, Col, Form } from 'react-bootstrap';
import Job from "./Job";

import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setJobs, setLoading, setError } from '../redux/MainSlice'


const MainSearch = () => {
  // const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);

  const dispatch = useDispatch();
  const { query, jobs, loading, error } = useSelector((state) => state.main);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";


  const handleChange = e => {
    dispatch(setQuery(e.target.value));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
        dispatch(setError(''));
      } else {
        dispatch(setError('Error: at fetching data'));
      }
    } catch (error) {
      console.log(error);
      dispatch(setError('An error occurred while fetching data.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

 

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading &&
            !error &&
            jobs.map((jobData) => (
              <div key={jobData._id}>
                <Job data={jobData}></Job>
              </div>
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
