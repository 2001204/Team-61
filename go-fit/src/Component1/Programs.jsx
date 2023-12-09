
// 450 350
import React, { useState } from 'react';
import { Container, Button,Image, Alert } from 'react-bootstrap'; // Import your Container component
import {Row,Col,Card} from 'react-bootstrap';
import yogapic from '../Img/pexels-yan-krukau-8436627(3).jpg'
import gympic from '../Img/gympic.jpg'

export function Programs() {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
        transform: isHovered ? 'translateY(-5px)' : 'none',
    };

    return (
        <Container>

            <Alert variant='success' style={{textAlign:"center"}}>
               <h1> Programs</h1>
            </Alert>
            <div class="card-group mt-5 "  >
                <div class="card me-3" style={cardStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                      <Image className="card-img-top" src={yogapic} alt="Card image cap" />
                    <div class="card-body text-center" >
                        <h5 class="card-title" >Yoga</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <br/>
                        <Button variant="outline-primary">Primary</Button>
                    </div>
                </div>
                <div class="card  me-3" style={cardStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <Image className="card-img-top" src={gympic} alt="Card image cap" />
                    <div class="card-body text-center">
                        <h5 class="card-title">Card title</h5>

                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <Button variant="outline-primary">Primary</Button>
                    </div>
                </div>
                 <div class="card  me-3" style={cardStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <Image className="card-img-top" src={yogapic} alt="Card image cap" />
                    <div class="card-body text-center">
                        <h5 class="card-title">Card title</h5>

                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <Button variant="outline-primary">Primary</Button>
                    </div>
                </div>
                <div class="card me-3" style={cardStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                      <Image className="card-img-top" src={yogapic} alt="Card image cap" />
                    <div class="card-body text-center" >
                        <h5 class="card-title" >Yoga</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <br/>
                        <Button variant="outline-primary">Primary</Button>
                    </div>
                </div>
            </div>


         
            <div className="row">
                            <Row>
                                <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/f5e214b7-243b-4fec-b821-8e6400d49213" />
                                    <Card.Body>
                                        <Card.Title>Meditation</Card.Title>
                                        <Card.Text>
                                        About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.
                                       
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                                </Col>

                                <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/54117647-b2c9-4800-9370-18fb650fe4ba" />
                                    <Card.Body>
                                        <Card.Title>Yoga</Card.Title>
                                        <Card.Text>
                                        Pranayam yoga is a science of breathing or "control of breath". it is a breathing exercise that deals with various types of breath control. It can also be called yoga for relaxation of the mind, body, and soul. In Sanskrit, the word "Prana" means "breath", and "yama" means "control"</Card.Text>
                                    </Card.Body>

                                </Card>
                                </Col>
                                <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://lh4.googleusercontent.com/BxqM86UPr61cND6KSgq2fwFq1Pqfwh_RBCC-8ioX0WFlniuQuPD0K5H4IjxbY2sTt_I8iQqcy9PueRWswAHFUPZZGvObVrCE4viS2Vs8ZF-X83JEGvdOcm63NeykhTbC3o5vqvprSIJN_x9YOkM"/>
                                    <Card.Body>
                                        <Card.Title>Workout</Card.Title>
                                        <Card.Text>
                                        The physical and mental health benefits of exercise are often enough to encourage people to pay for membership. According to the NHS, exercise is a 'miracle cure'. Improved physical health, enhanced mental health, social interaction, increased energy and productivity, and personal achievement 
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                                </Col>
                                <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/f5e214b7-243b-4fec-b821-8e6400d49213" />
                                    <Card.Body>
                                        <Card.Title>Meditation</Card.Title>
                                        <Card.Text>
                                        About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.
                                       
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    </Col>
                
                            </Row>

                            <Row>
                                <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/f5e214b7-243b-4fec-b821-8e6400d49213" />
                                    <Card.Body>
                                        <Card.Title>Meditation</Card.Title>
                                        <Card.Text>
                                        About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.
                                       
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                                </Col>

                                <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/54117647-b2c9-4800-9370-18fb650fe4ba" />
                                    <Card.Body>
                                        <Card.Title>Yoga</Card.Title>
                                        <Card.Text>
                                        Pranayam yoga is a science of breathing or "control of breath". it is a breathing exercise that deals with various types of breath control. It can also be called yoga for relaxation of the mind, body, and soul. In Sanskrit, the word "Prana" means "breath", and "yama" means "control"</Card.Text>
                                    </Card.Body>

                                </Card>
                                </Col>
                                <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://lh4.googleusercontent.com/BxqM86UPr61cND6KSgq2fwFq1Pqfwh_RBCC-8ioX0WFlniuQuPD0K5H4IjxbY2sTt_I8iQqcy9PueRWswAHFUPZZGvObVrCE4viS2Vs8ZF-X83JEGvdOcm63NeykhTbC3o5vqvprSIJN_x9YOkM"/>
                                    <Card.Body>
                                        <Card.Title>Workout</Card.Title>
                                        <Card.Text>
                                        The physical and mental health benefits of exercise are often enough to encourage people to pay for membership. According to the NHS, exercise is a 'miracle cure'. Improved physical health, enhanced mental health, social interaction, increased energy and productivity, and personal achievement 
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                                </Col>
                                <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/f5e214b7-243b-4fec-b821-8e6400d49213" />
                                    <Card.Body>
                                        <Card.Title>Meditation</Card.Title>
                                        <Card.Text>
                                        About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.
                                       
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    </Col>
                
                            </Row>
                         

                            <Row>
                                <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/f5e214b7-243b-4fec-b821-8e6400d49213" />
                                    <Card.Body>
                                        <Card.Title>Meditation</Card.Title>
                                        <Card.Text>
                                        About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.
                                       
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                                </Col>

                                <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/54117647-b2c9-4800-9370-18fb650fe4ba" />
                                    <Card.Body>
                                        <Card.Title>Yoga</Card.Title>
                                        <Card.Text>
                                        Pranayam yoga is a science of breathing or "control of breath". it is a breathing exercise that deals with various types of breath control. It can also be called yoga for relaxation of the mind, body, and soul. In Sanskrit, the word "Prana" means "breath", and "yama" means "control"</Card.Text>
                                    </Card.Body>

                                </Card>
                                </Col>
                                <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://lh4.googleusercontent.com/BxqM86UPr61cND6KSgq2fwFq1Pqfwh_RBCC-8ioX0WFlniuQuPD0K5H4IjxbY2sTt_I8iQqcy9PueRWswAHFUPZZGvObVrCE4viS2Vs8ZF-X83JEGvdOcm63NeykhTbC3o5vqvprSIJN_x9YOkM"/>
                                    <Card.Body>
                                        <Card.Title>Workout</Card.Title>
                                        <Card.Text>
                                        The physical and mental health benefits of exercise are often enough to encourage people to pay for membership. According to the NHS, exercise is a 'miracle cure'. Improved physical health, enhanced mental health, social interaction, increased energy and productivity, and personal achievement 
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                                </Col>
                                <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/f5e214b7-243b-4fec-b821-8e6400d49213" />
                                    <Card.Body>
                                        <Card.Title>Meditation</Card.Title>
                                        <Card.Text>
                                        About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.
                                       
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    </Col>
                
                            </Row>
                         
                         

                           

                        </div>
         


         
        </Container>
        
    );
};

