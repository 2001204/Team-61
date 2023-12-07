import { Alert, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar() {
    return (


        <Container>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Go-Fit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
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
                            <LinkContainer to="/contactus">
                                <Nav.Link>Contact Us</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
}