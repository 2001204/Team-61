import styles from "./footer.module.css";
import { useNavigate } from "react-router";
import logoIcon from "./images/logo.jpg"
import { Container } from "react-bootstrap";

import logoicon1 from './images/facebook.png';
import logoicon2 from './images/insta.jpeg';
import logoicon3 from './images/twitter.png';
import logoicon4 from './images/whatsapp.jpeg';


const Footer = () => {
  const navigate = useNavigate();
  return (

    <Container fluid>

<div className="footbkg">

   
<div className={styles.footer}>
  <div className={`${styles.footer_content} container `}>
                <div>
                  <div className={styles.logo_holder}>
                  <img src={logoIcon}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                roundedCircle />{' '}
                  </div>
                  <div className={styles.info}>
                    <span>Call :</span>
                    <p>+201151747091</p>
                    <span>Email :</span>
                    <p>Team@61.gmail.com</p>
                  </div>
                </div>
                    <div>
                    <div class="footer-content">
                      <h4>Follow us on Social Media </h4>
                      <hr />
        <div class="social-media" id="social">
            <img width="30px" height="30px" src={logoicon1} alt="Social Media 1"/>&emsp;&emsp;&emsp;
            <img width="30px" height="30px" src={logoicon2} alt="Social Media 2"/>&emsp;&emsp;&emsp;
            <img width="30px" height="30px" src={logoicon3} alt="Social Media 3"/>&emsp;&emsp;&emsp;
            <img width="30px" height="30px" src={logoicon4} alt="Social Media 4"/>&emsp;&emsp;&emsp;
        </div>
    </div>
                      {/* <ul>
                        <li onClick={() => navigate("/calculator")}>BMI Calculator</li>
                        <li onClick={() => navigate("/contact")}>Contact</li>
                        <li>Licenses</li>
                      </ul> */}
                    </div>
                    <div>
      <h3>GetUpdates</h3>
      <input type="text" placeholder="Enter Your Email"/>
      <button>Subscribe</button>
                <div className={styles.footer_icons}>
                  <a
                    href="#"
                    target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
    </div>
  </div>
</div>
  

</div>


    </Container>
   
  );
};

export default Footer;
