
import React from "react";
import { Card, CardGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import background from "./images/logo.jpg";
import Slider from "./slider";
import Programcards from "./Programcards";

// import Homeimg from "./images/logo.jpg"

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
        <Container className="text-center">
            <div>
                <Slider></Slider>
            </div>
            <div style={{ backgroundImage: `url(${background})` }}>
                Hello World
            </div>
            <div>
                <Row>.
                <img src={background} fluid />;
                <img src={background} fluid />;
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
        
        </Container>
    );
}
