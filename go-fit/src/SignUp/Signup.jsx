// SignUp.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './Signup.css'; // Import your custom CSS file
import icp_cg from "./Men-with-battle-rope-in-functional-training-fitness-gym-.jpg"


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitForm = () => {
    if (validateForm() && validateEmail()) {
      // If validation passes, you can handle form submission here
      console.log('Form submitted:', username, email, password);
    }
  };

  const validateForm = () => {
    // Add your validation logic here
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return false; // Prevent form submission
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false; // Prevent form submission
    }

    // You can add more complex validation logic as needed

    return true; // Allow form submission
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (!isValid) {
      alert('Email is not valid.');
      return false; // Prevent form submission
    }

    return true; // Allow form submission
  };

  return (
    <div className="wrapper">
      <Form>
        <h1>Sign Up</h1>
        <Form.Group className="input-box">
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <box-icon type="solid" name="user-detail"></box-icon>
        </Form.Group>

        <Form.Group className="input-box">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <box-icon type="solid" name="mail-send"></box-icon>
        </Form.Group>

        <Form.Group className="input-box">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <box-icon type="solid" name="lock-open-alt"></box-icon>
        </Form.Group>

        <Form.Group className="input-box">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <box-icon type="solid" name="lock-open-alt"></box-icon>
        </Form.Group>

        <Button type="button" className="btn" onClick={submitForm}>
          Sign Up
        </Button>

        <div className="register-link">
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
