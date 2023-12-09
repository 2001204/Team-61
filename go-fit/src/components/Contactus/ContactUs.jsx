import { Row, Col, Table, Container } from 'react-bootstrap';
import React from 'react';
import "./Contactus.css";
import mappic from "./Map.png";

export function ContactUs() {
    return (
        <Container>
            <h2 className="main-title text-center">CONTACT US</h2>
            <Table className='mt-4'>
                <Row>
                    <Col md={6}>
                        <div className="p-5 contactus" style={{ textAlign: "center" }}>
                            {/* Add email and contact number here */}
                            <div className="contact-info">
                            <p>Address:<b>"Go-Fit", Health and Wellness , Team-61 Colony, Online Batch sep 23, Dist: Zoom meet, State: CDAC, Mumbai</b>  </p>
                            <p>Website: <b>www.Go-Fit.com</b></p>
                                <p>Email: <a href="https://mail.google.com/mail/u/0/"> team-61@gmail.com</a></p>
                                <p>Contact:+91 7420982613/8177838017 </p> <hr /> 
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
                            <div style={{ textAlign: "center" ,}}>
                                <input type="submit" value="Submit" style={{ width: "40%" }}></input>
                            </div>

                            

                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <a href="https://www.google.com/maps/@38.8823224,-76.9928375,16.71z?entry=ttu" target="_blank" rel="noopener noreferrer">
                            <img
                                src={mappic}
                                alt="Map"
                                marginTop={20}
                                style={{ width: "85%", height: "90%" }}
                            />
                        </a>
                    </Col>
                </Row>
            </Table>
        </Container>
    );
}


