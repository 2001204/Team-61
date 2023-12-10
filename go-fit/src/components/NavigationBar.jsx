import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Button from 'react-bootstrap/Button';

import img6 from './images/developer.jpg'

import pic from "./images/logo.jpg"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


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
                        
                           
                        <LinkContainer to="/contactus">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>

                         <LinkContainer to="/signup">
                            <Nav.Link><Button >Sign Up</Button></Nav.Link>
                        </LinkContainer> 

                         <LinkContainer to="/login">
                            <Nav.Link><Button >Login</Button></Nav.Link>
                        </LinkContainer>
{/* 
                        <LinkContainer to="/login/dashboard">
                            <Nav.Link><Button>Dashbord</Button></Nav.Link>
                        </LinkContainer> */}

                        {/* <DropdownButton id="dropdown-basic-button" title="DashBoard">
                                <Dropdown.Item ><LinkContainer to="/dashboard/signup">
                                                    <Nav.Link>Sign Up</Nav.Link>
                                                </LinkContainer>
                                </Dropdown.Item>
                                <Dropdown.Item ><LinkContainer to="/dashboard/login">
                                                    <Nav.Link>Login</Nav.Link>
                                                </LinkContainer>
                                </Dropdown.Item>
                                
                            </DropdownButton> */}

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
