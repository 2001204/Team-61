
import React from "react";
import { Card, CardGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import styles from "./Home.css";

import background from "./images/card14.jpg";
import Slider from "./slider";
import Programcards from "./Programcards";
import img1 from "./images/gif2.gif";
import img2 from "./images/gif2.gif";
import img3 from "./images/gif3.gif";
import img4 from "./images/gif4.gif";
import img5 from "./images/gif5.gif";



export function Home() {
    let imageStyle = {
        height: "500px",
        width: "1000px",
        backgroundImage:
            'url("https://img.freepik.com/premium-photo/contemporary-spotless-fitness-gym-center-interiorgenerative-ai_391052-10889.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1701820800&semt=ais")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        color: "white",
    };
    return (
        <Container fluid>
             <div style={{ backgroundImage: `url(${background})` }}>
              
            <div>
                <Slider></Slider>
            </div><hr />
           

            <div class="hero" id="about">
           <div class="hero-description">
             <div class="hero-text">
              <h1 class="hero-title">Adding Fun to your Life</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit quo. Officia nisi corrupti iste asperiores accusamus quisquam quod perspiciatis vitae? Esse eum molestiae ab quasi omnis quidem officia eaque.
              </p>
              <span class="w3-text-white social" >
                <p >Follow us on Social media</p>
                <div class="w3-margin-top">
             <a href="#">  <i class="fa fa-facebook-official w3-hover-opacity icons" ></i></a> 
             <a href="#"><i class="fa fa-instagram w3-hover-opacity icons" ></i></a> 
             <a href="#"><i class="fa fa-snapchat w3-hover-opacity icons"></i></a>  
             <a href="#"><i class="fa fa-pinterest-p w3-hover-opacity icons" ></i></a>  
             <a href="#"><i class="fa fa-twitter w3-hover-opacity icons"></i></a>  
             <a href="#"><i class="fa fa-linkedin w3-hover-opacity icons"></i></a>  
             </div>
              </span>
             </div>
           </div>
         </div>


            <div>
                <Row>
                <img src={img1} fluid height={500} width={500}/>;
                <img src={img3} fluid />;
                </Row>
            </div>
            {/*             
            <div>
                <div class="image" style={imageStyle}>
                    This div contains a background image.
                    <p>In this app you can perform CRUD operations in Student.</p>
                </div>
            </div>
            */}

 <Programcards></Programcards>
 </div>
        </Container>
    );
}
