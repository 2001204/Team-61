import styles from "./footer.module.css";
import { useNavigate } from "react-router";
import logoIcon from "./images/logo.jpg"
import { Container } from "react-bootstrap";

const Footer = () => {
  const navigate = useNavigate();
  return (
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
                          <ul>
                            <li onClick={() => navigate("/calculator")}>BMI Calculator</li>
                            <li onClick={() => navigate("/contact")}>Contact</li>
                            <li>Licenses</li>
                          </ul>
                        </div>
                        <div>
          <h3>GetUpdates</h3>
          <input type="text" placeholder="Enter Your Email" />
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
  );
};

export default Footer;
