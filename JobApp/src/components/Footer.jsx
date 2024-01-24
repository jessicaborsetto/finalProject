import { Link } from "react-router-dom"
import { Row, Col } from "react-bootstrap";


function Footer() {
    return (
        <>
            <footer>
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

                <div className="container p-0 footerBox">
                    <Row>
                        <Col className="col-4">
                            <h5>Company</h5>
                            <div className="container p-0">
                                <Row>
                                    <Col className="col-5 footerLinks">
                                        <Link to="*">About Us</Link>
                                        <a href="#">Careers</a>
                                        <a href="#">Contact Us</a>
                                        <a href="#">Block</a>
                                    </Col>

                                </Row>
                            </div>
                        </Col>

                        <Col className="col-4">
                            <h5>Further Information</h5>
                            <div className="container p-0">
                                <Row>
                                    <Col className="col-5 footerLinks">
                                        <a href="#">Terms & Conditions</a>
                                        <a href="#">Privacy Policy</a>
                                        <a href="#">Terms of Use</a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col className="col-4">
                            <h5>Help</h5>
                            <div className="container p-0">
                                <Row>
                                    <Col className="col-5 footerLinks">
                                        <a href="#">Frequent Questions</a>
                                    </Col>
                                </Row>
                            </div>

                        </Col>
                    </Row>
                </div>



            </footer>
        </>
    )
}

export default Footer