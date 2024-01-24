import { Link } from "react-router-dom"
import { Row, Col, Container } from "react-bootstrap";


function Footer() {
    return (
        <>
            <Container className="mb-4 footerContainer">
                <hr />

                <h3>#StayConnected &#128640;</h3>
                <Row>
                    <Col xs={12} md={8} className="socials mt-xs-3 mt-sm-3 mt-md-0 ">
                        <i className="bi bi-facebook socials"></i>
                        <i className="bi bi-linkedin socials"></i>
                        <i className="bi bi-instagram socials"></i>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="d-flex mt-xs-3 mt-sm-3 mt-md-0">
                            <i className="bi bi-envelope-fill me-2"></i>
                            <h5> Mail Us </h5>
                        </div>
                        <p>jobs4you@gmail.com</p>
                    </Col>

                </Row>


                <hr />

                <div className="container p-0 ContainerBox">
                    <Row>
                        <Col  xs={12} md={4} className="mb-4">
                            <h5>Company</h5>
                            <div className="container p-0">
                                <Row>
                                    <Col className="footerLinks">
                                        <Link to="/404">About Us</Link>
                                        <Link to="/404">Careers</Link>
                                        <Link to="/404">Contact Us</Link>
                                        <Link to="/404">Block</Link>
                                    </Col>

                                </Row>
                            </div>
                        </Col>

                        <Col xs={12} md={4} className="mb-4">
                            <h5>Further Information</h5>
                            <div className="container p-0">
                                <Row>
                                    <Col className="footerLinks">
                                        <Link to="/404">Terms & Conditions</Link>
                                        <Link to="/404">Privacy Policy</Link>
                                        <Link to="/404">Terms of Use</Link>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col c xs={12} md={4} className="mb-4">
                            <h5>Help</h5>
                            <div className="container p-0">
                                <Row>
                                    <Col className="footerLinks">
                                        <Link to="/404">Frequent Questions</Link>
                                    </Col>
                                </Row>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Footer