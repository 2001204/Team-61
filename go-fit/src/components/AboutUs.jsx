import React from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import Dipak from "./images/dipak.jpg";
import Anuja from "./images/anuja.jpeg";
import Yogesh from "./images/yogesh.jpeg";

export function AboutUs() {
    return (
        <Container fluid>
            <Alert
                variant="success"
                style={{
                    textAlign: "center",
                    backgroundColor: "#888888",
                    color: "white",
                }}
            >
                <h1>About Us</h1>
            </Alert>
            <Row>
                <Col lg={4}>
                    <h3 style={{ color: 'black', fontWeight: 'bold' }}>Vision</h3>

                    <p style={{ color: 'black', fontStyle: 'italic' }}>
                        Go-Fit is a health and fitness company offering digital and offline experiences across fitness, nutrition, and mental well-being.

                        With the aim to make fitness fun and easy, and medical and lifestyle care hassle-free.
                    </p>
                </Col>
                <Col lg={4}>
                    <h3 style={{ color: 'black', fontWeight: 'bold' }}>Mission</h3>
                    <p style={{ color: 'black', fontStyle: 'italic' }}>Go-fit's mission is to “make health easy”.

                        Through our products and services, we want to enable people to significantly improve their overall health, reduce the risk of lifestyle diseases and enable a long, disease free life.</p>
                </Col>
                <Col lg={4}>
                    <h3 style={{ color: 'black', fontWeight: 'bold' }}>Our History</h3>
                    <p style={{ color: 'black', fontStyle: 'italic' }}>Co-founded by Anuja Gupta, Yogesh patel and Dipak Wani in CDAC -Mumbai 2023, the company is headquartered in Kharghar, Mumbai.</p>
                </Col>
            </Row>


            <Alert
                variant="danger"
                style={{
                    textAlign: "center",
                    color: "dark blue",
                }}
            > <h1>Meet Our Team </h1>
            </Alert>


            <Row >
                <Col lg={4} style={{ textAlign: "center" }}>
                    <img
                        src={Dipak}
                        alt="Dipak Wani"
                        style={{ width: '150px', height: '200px' }}
                    />

                </Col>
                <Col lg={4} style={{ textAlign: "center" }}>

                    <img
                        src={Anuja}
                        alt="Anuja Gupta"
                        style={{ width: '150px', height: '200px' }}
                    />             
                    </Col>
                <Col lg={4} style={{ textAlign: "center" }}>
                    <img
                        src={Yogesh}
                        alt="Yogesh Patel"
                        style={{ width: '150px', height: '200px' }}
                    />              
                    </Col>
            </Row>




            <Row >
                <Col lg={4} style={{ textAlign: "center" }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Dipak} />
                        <Card.Body>
                            <Card.Title>Dipak Wani</Card.Title>
                            <Card.Text>
                                PRN, jh, edcu back, destignation
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} style={{ textAlign: "center" }}>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Dipak} />
                        <Card.Body>
                            <Card.Title>Dipak Wani</Card.Title>
                            <Card.Text>
                                PRN, jh, edcu back, destignation
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} style={{ textAlign: "center" }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Dipak} />
                        <Card.Body>
                            <Card.Title>Dipak Wani</Card.Title>
                            <Card.Text>
                                PRN, jh, edcu back, destignation
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    "Alone we can do so little; together we can do so much." – Helen Keller
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>


                </Col>

                <Col>
                    <Card>
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    "Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results."
                                </p>
                                <footer className="blockquote-footer">
                                    Andrew Carnegie<cite title="Source Title"> </cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>


        </Container>
    );
}