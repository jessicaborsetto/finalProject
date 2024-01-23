import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <hr />

            <h3>#StayConnected &#128640;</h3>
            <div className="socials">
                <i className="bi bi-facebook socials"></i>
                <i className="bi bi-linkedin socials"></i>
                <i className="bi bi-instagram socials"></i>
            </div>

            <hr />

            <div className="container p-0 footerBox">
                <div className="row">
                    <div className="col-6">
                        <h5>Company</h5>
                        <div className="container p-0">
                            <div className="row">
                                <div className="col-5 footerLinks">
                                    <Link to="*">About Us</Link>
                                    <a href="">Careers</a>
                                    <a href="">Contact Us</a>
                                    <a href="">Block</a>
                                </div>

                            </div>
                        </div>
                    </div>
              
                <div className="col-6">
                    <h5>Further Information</h5>
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-5 footerLinks">
                                <a href="">Terms & Conditions</a>
                                <a href="">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>


        
        </footer>
    )
}

export default Footer