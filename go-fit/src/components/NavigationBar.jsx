import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import img6 from './images/developer.jpg'

import pic from "./images/logo.jpg"


export function NavigationBar() {
    return (
        <Navbar expand="lg" bg="light" data-bs-theme="transperent" className="sticky-top">
            <Container>
                <Navbar.Brand href="/" className="justify-content-center">
                    <img src={pic}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        roundedCircle />{' '}
                    Go-Fit
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto">
                    <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/aboutus">
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/programs">
                            <Nav.Link>Programs</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/dashboard">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contactus">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/login">
                            <Nav.Link><Button >Login</Button></Nav.Link>
                        </LinkContainer>

                       
                    
                    </Nav>
                    <img src={img6}
                        width="60"
                        height="50"
                        className="d-inline-block align-top"
                        roundedCircle />
                    
                    

                </Navbar.Collapse>

                
            </Container>
        </Navbar>
    );
}
