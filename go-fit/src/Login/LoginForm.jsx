
// // LoginForm.js
import { useState } from "react";
import {  Button, Col, Container, Form, Row } from "react-bootstrap";
import { login } from "../service/userservice";
import { useNavigate } from "react-router-dom";


export function LoginForm() {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({email:"",password:""});
   const [loginError,setLoginError]=useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const result= await login(formData);
          console.log(result);
          localStorage.setItem("token",result.token);
          navigate(`/dashboard/${formData.email}`);
        } catch (error) {
            setLoginError(true);
            setTimeout(() => {
              alert('Email or Password is not valid.')
            }, 1000);
            console.log(error);
        }
    }
    return (
        <Container className="mt-5">
            <Row>
                <Col lg={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" name="email" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    {/* { loginError? alert('Email or Password is not valid.'):null}  */}
                </Col>
            </Row>
        </Container>
    );
}