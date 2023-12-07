import React from "react";
import { Card } from "react-bootstrap";


export function Home() {
    let imageStyle = {
        height: "500px",
        width: "800px",
        backgroundImage:
            'url("https://img.freepik.com/premium-photo/contemporary-spotless-fitness-gym-center-interiorgenerative-ai_391052-10889.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1701820800&semt=ais")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        color: "white",
    };
    return (
        <div>
            <div class="image" style={imageStyle}>
                This div contains a background image.
            </div>

            <Card className="bg-dark text-white">
                <Card.Img src="/image/logo.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/logo.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/logo.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}