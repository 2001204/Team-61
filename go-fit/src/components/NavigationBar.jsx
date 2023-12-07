import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'


export function NavigationBar() {
    return (
        <Navbar expand="lg" bg="light" data-bs-theme="transperent">
            <Container>

                <Navbar.Brand href="/" className="justify-content-center">
                <Image src="logo.png"
                        width="30"
                        height="30"
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
                        <LinkContainer to="/about">
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/programs">
                            <Nav.Link>Programs</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contactus">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Button href="#">Login</Button>

                </Navbar.Collapse>

                <Image src="holder.js/800px600" fluid />;
            </Container>
        </Navbar>
    );
}
