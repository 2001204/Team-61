
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
          navigate("/dashboard");
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



// import React, { useState } from 'react';
// import './LoginForm.css'; // Import your CSS file
// import { Container } from 'react-bootstrap';


// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const submitForm = () => {
//     if (validateForm()) {
//       // If validation passes, you can handle form submission here
//       console.log('Form submitted:', username, password);
//     }
//   };

//   const validateForm = () => {
//     // Add your validation logic here
//     if (username === password || password.length < 6) {
//       alert('Please enter a valid username and password.');
//       return false; // Prevent form submission
//     }

//     // You can add more complex validation logic as needed

//     return true; // Allow form submission
//   };

//   return (

//     <Container fluid>

// <div className="wrapper">
//       <form>
//         <h1>Login</h1>
//         <div className="input-box">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <box-icon type="solid" name="user-detail"></box-icon>
//         </div>

//         <div className="input-box">
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <box-icon type="solid" name="lock-open-alt"></box-icon>
//         </div>

//         <div className="remember-forgot">
//           <label>
//             <input type="checkbox" /> Remember me
//           </label>
//           <a href="#">Forgot password</a>
//         </div>

//         <br />

//         <button type="button" className="btn" onClick={submitForm}>
//           Login
//         </button>

//         <div className="register-link">
//           <p>
//             Don't have an account? <a href="#">Register</a>
//           </p>
//         </div>
//       </form>
//     </div>
//     </Container>
 
//   );
// };

// export default LoginForm;



// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css'; // Import your CSS file
import { Container } from 'react-bootstrap';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = () => {
    if (validateForm()) {
      // If validation passes, you can handle form submission here
      console.log('Form submitted:', username, password);
    }
  };

  const validateForm = () => {
    // Add your validation logic here
    if (username === password || password.length < 6) {
      alert('Please enter a valid username and password.');
      return false; // Prevent form submission
    }

    // You can add more complex validation logic as needed

    return true; // Allow form submission
  };

  return (




    <Container fluid>

<div className="wrapper">
      <form>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <box-icon type="solid" name="user-detail"></box-icon>
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <box-icon type="solid" name="lock-open-alt"></box-icon>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password</a>
        </div>

        <br />

        <button type="button" className="btn" onClick={submitForm}>
          Login
        </button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
    </Container>
 
  );
};

export default LoginForm;

