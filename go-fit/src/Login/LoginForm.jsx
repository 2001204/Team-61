// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css'; // Import your CSS file

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
  );
};

export default LoginForm;
