import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

import pic from "./images/logo.jpg"


export function NavigationBar() {
    return (
        <Navbar expand="lg" bg="light" data-bs-theme="transperent">
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

                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>

                        <LinkContainer to="/programs">
                            <Nav.Link>Programs</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/dashboard">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contactus">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Button href="#">Login</Button>

                </Navbar.Collapse>

                
            </Container>
        </Navbar>
    );
}
