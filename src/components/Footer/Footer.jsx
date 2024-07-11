import './Footer.scss';
import logo from './../../assets/images/logo.png'





const Footer = () => {
    return (
        <>
            <div className="container">
                <footer>
                    <div className="top">
                        <div className="left">
                            <p>DEVELOPED BY</p>
                            <a href=""><img src={logo} alt="" /></a>
                        </div>
                        <div className="right">
                            <div className="box">
                                <p>REGISTERED ADDRESS</p>
                                <ul>
                                    <li>Basundhara Reality, <br />C4-173/ New Mouza Kolkata,<br />Ward 20, PS, Maheshtala,<br />West Bengal 700140</li>
                                </ul>
                                {/* <small>Basundhara Reality, <br />C4-173/ New Mouza Kolkata,<br />Ward 20, PS, Maheshtala,<br />West Bengal 700140</small> */}
                            </div>
                            <div className="box">
                                <p>CONSTRUCTION UPDATE</p>
                                <ul>
                                    <li><a href="">Click here to see</a></li>
                                    <li><a href="">Become a partner</a></li>
                                </ul>
                            </div>
                            <div className="box">
                                <p>RERA NUMBER</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <a href="">Website Policy</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Disclaimer</a>
                    </div>
                </footer>
                <div className="copyright">
                    <p>© 2024. Basundharareality - All rights reserved | Website Constructed by <a href="">WASS</a></p>
                </div>
            </div>
        </>
    )
}

export default Footer