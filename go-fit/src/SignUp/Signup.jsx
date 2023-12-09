
// Signup.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { saveUser } from '../service/userservice';

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await saveUser(formData);
      console.log("data submitted");
      // setFormData({ username: "", email: "", password: "", confirmPassword: "" });
      
      // setIsSubmitted(true);

      // setTimeout(() => {
      //   setIsSubmitted(false);
      // }, 1500);
   console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className='mb-5 mt-5' fluid>
        <div className="wrapper">
          <Form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" className="btn">
              Sign Up
            </Button>

            <div className="register-link">
              <p>
                Already have an account? <a href="#">Login</a>
              </p>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Signup;


// // SignUp.js
// import React, { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
// import './Signup.css'; // Import your custom CSS file
// import icp_cg from "./Men-with-battle-rope-in-functional-training-fitness-gym-.jpg"
// import { saveUser } from '../service/userservice';


// const Signup = () => {

//   const [formData,setFormData]=useState({username:"",email:"",password:"",confirmPassword:""});

    
//   const [isSubmitted,setIsSubmitted]=useState(false);

//   const handleChange=(e)=>{
//       setFormData({...formData,[e.target.name]:e.target.value});
//   }

//   const handleSubmit=async(e)=>{
//       e.preventDefault();
//       try {
//          const result= await saveUser(formData);
//          setFormData({username:"",email:"",password:"",confirmPassword:""});
//         //  setIsSubmitted(true);
//         //  setTimeout(()=>{
//         //   setIsSubmitted(false);
//         //  },1500);
//          console.log(result.message);
//       } catch (error) {
//           console.log(error);
//       }
//   }


//   // const [username, setUsername] = useState('');
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   // const [confirmPassword, setConfirmPassword] = useState('');

//   // const submitForm = () => {
//   //   if (validateForm() && validateEmail()) {
//   //     // If validation passes, you can handle form submission here
//   //     console.log('Form submitted:', username, email, password);
//   //   }
//   // };

//   // const validateForm = () => {
//   //   // Add your validation logic here
//   //   if (password.length < 6) {
//   //     alert('Password must be at least 6 characters long.');
//   //     return false; // Prevent form submission
//   //   }

//   //   if (password !== confirmPassword) {
//   //     alert('Passwords do not match.');
//   //     return false; // Prevent form submission
//   //   }

//   //   // You can add more complex validation logic as needed

//   //   return true; // Allow form submission
//   // };

//   // const validateEmail = () => {
//   //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   //   const isValid = emailRegex.test(email);

//   //   if (!isValid) {
//   //     alert('Email is not valid.');
//   //     return false; // Prevent form submission
//   //   }

//   //   return true; // Allow form submission
//   // };

//   return (
//     <Container className='mb-5 mt-5' fluid>
//       <div className="wrapper">
//       <Form onSubmit={handleSubmit}>
//         <h1>Sign Up</h1>
//         <Form.Group className="input-box">
          
//         <Form.Control type="text" value={isSubmitted?formData.username:null} placeholder="Enter Username" name="username" onchannge={handleChange} />

//           <box-icon type="solid" name="user-detail"></box-icon>
//         </Form.Group>

//         <Form.Group className="input-box">
              
//         <Form.Control type="email" value={isSubmitted?formData.email:null} placeholder="Enter email" name="email" onchannge={handleChange} />

//           <box-icon type="solid" name="mail-send"></box-icon>
//         </Form.Group>

//         <Form.Group className="input-box">
//         <Form.Control type="password" value={isSubmitted?formData.password:null} placeholder="Enter password" name="password" onchannge={handleChange} />

//           <box-icon type="solid" name="lock-open-alt"></box-icon>
//         </Form.Group>

//         <Form.Group className="input-box">
//         <Form.Control type="confirmpassword" value={isSubmitted?formData.confirmPassword:null} placeholder="Enter confirmPassword" name="confirmPassword" onchannge={handleChange} />

//           <box-icon type="solid" name="lock-open-alt"></box-icon>
//         </Form.Group>

//         <Button type="button" className="btn">
//           Sign Up
//         </Button>

//         <div className="register-link">
//           <p>
//             Already have an account? <a href="#">Login</a>
//           </p>
//         </div>
//       </Form>
//     </div>

//     </Container>
    
//   );
// };

// export default Signup;
