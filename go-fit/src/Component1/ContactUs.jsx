import { Row, Col, Table, Container } from 'react-bootstrap';
import React from 'react';
import "./Contactus.css";
import mappic from "../Img/Map.png";

export function ContactUs() {
    return (
        <Container>
            <h2 className="main-title text-center">CONTACT US</h2>
            <Table className='mt-4'>
                <Row>
                    <Col md={6}>
                        <div className="p-5 contactus" style={{ textAlign: "center" }}>
                            <h2>Send Us a Message</h2>
                            <div>
                                <input type="text" placeholder='Full Name' style={{ marginBottom: "10px" }}></input>
                            </div>
                            <div>
                                <input type="email" placeholder='Email' style={{ marginBottom: "10px" }}></input>
                            </div>
                            <div>
                                <input type="text" placeholder='Subject' style={{ marginBottom: "10px" }}></input>
                            </div>
                            <div>
                                <textarea style={{ marginBottom: "10px" }}></textarea>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <input type="submit" value="Submit" style={{ width: "40%" }}></input>
                            </div>

                            {/* Add email and contact number here */}
                            <div className="contact-info">
                                <p>Email: team21@gmail.com</p>
                                <p>Contact: +1 (123) 456-7890</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <a href="https://www.google.com/maps/@38.8823224,-76.9928375,16.71z?entry=ttu" target="_blank" rel="noopener noreferrer">
                            <img
                                src={mappic}
                                alt="Map"
                                style={{ width: "85%", height: "auto" }}
                            />
                        </a>
                    </Col>
                </Row>
            </Table>
        </Container>
    );
}


