// import React, { useEffect, useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import { fetchuserByEmail } from '../service/userservice';


// export function Profile()
//  {
//     const [userDetails, setUserDetails] = useState([]);


//     async function populateUserState(email) {
//         try {
//           const data = await fetchuserByEmail(email);
//           console.log(data);
      
//           // Assuming data.user is an object with user details
//           setUserDetails([data.user]);
      
//           console.log("Data fetched from the database successfully");
//         } catch (error) {
//           console.log(error);
//         }
//       }
  
//     useEffect(() => {
//       populateUserState(email);
//     }, []);
  
    // return (
    //   <Container>
    //   <Row>
    //     <Col>
    //       <h2 style={{ color: 'White' }}>User Profile</h2>
    //       {userDetails.map((user, index) => (
    //         <div style={{ color: 'yellow' }} key={index}>
    //              <p><strong>Username:</strong> {user.username}</p>
    //           <p><strong>Email:</strong> {user.email}</p>
    //         </div>
    //       ))}
    //     </Col>
    //   </Row>
    // </Container>
    // );
//   }


import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { fetchuserByEmail } from '../service/userservice';

export function Profile() {
  const [userDetails, setUserDetails] = useState([]);

  const [emailToFetch, setEmailToFetch] = useState('');

  async function populateUserState(email) {
    try {
      const data = await fetchuserByEmail(email);
      console.log(data);

      // Assuming data.user is an object with user details
      setUserDetails([data.user]);

      console.log("Data fetched from the database successfully");
    } catch (error) {
      console.log(error);
    }
  }


  // useEffect(() => {
  //   // Fetch user email from local storage
  //   const userEmail = localStorage.getItem('userEmail');
  //   if (userEmail) {
  //     setEmailToFetch(userEmail);
  //   }
  // }, []);


  useEffect(() => {
    // Fetch user data based on the dynamically set email address
    if (emailToFetch.trim() !== '') {
      populateUserState(emailToFetch);
    }
  }, [emailToFetch]);

  return (
    <Container>
      <Row>
        <Col>
          <h2 style={{ color: 'White' }}>User Profile</h2>
          <input
            type="text"
            placeholder="Enter email to fetch user data"
            value={emailToFetch}
            onChange={(e) => setEmailToFetch(e.target.value)}
          />
          {userDetails.map((user, index) => (
            <div style={{ color: 'yellow' }} key={index}>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
