import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";

import { useDispatch, useSelector } from "react-redux";
import { setQuery, setJobs, setLoading, setError } from "../redux/MainSlice";


const MainSearch = () => {
  //stato precedente--------------------------------
  // const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);

  //dispatch e selector dello state (mainSlice.js)
  const dispatch = useDispatch();
  const { query, jobs, loading, error } = useSelector((state) => state.main);

  //API
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  // gestisce il cambio del valore nella casella di ricerca ---> aggiora il valore della query con quello ricevuto dal form
  // si richiama nel from control
  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  // gestisce l'azione del form con il caricamento dell'api in base alla query di ricerca + gestione in caso di errore
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const response = await fetch(baseEndpoint + query);
      if (response.ok) {
        // aggiorna lo stato delle offerte di lavoro con i dati ottenuti
        const { data } = await response.json();
        dispatch(setJobs(data));
        dispatch(setError(""));
      } else {
        // in caso di errore nella risposta, imposta uno stato di errore.
        dispatch(setError("Error: at fetching data"));
      }
    } catch (error) {
      console.log(error);
      dispatch(setError("An error occurred while fetching data."));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
    <Container className="mainBox">
      <Row>
        <Col xs={10} className="mx-auto">
          <h2 className="title">We wanna hire you!</h2>
        </Col>

        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Type and press Enter"
              className="input"
            />
          </Form>
        </Col>

        {query && (
        <Col xs={10} className="mx-auto mb-5 jobsContainer">
          {/* messaggio di caricamento durante il recupero dei dati */}
          {loading && <p>Loading...</p>}

          {/*messaggio di errore in caso di problemi con la ricerca */}
          {error && <p>Error: {error}</p>}

          {/* Mostra i risultati della ricerca solo se non ci sono problemi e non è in corso il caricamento */}
          {!loading && !error && jobs.map((jobData) => (
              <div key={jobData._id}>
                <Job data={jobData}></Job>
              </div>
            ))}
        </Col>
         )}
         
      </Row>

    </Container>
    </>
  );
};

export default MainSearch;
