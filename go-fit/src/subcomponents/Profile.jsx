
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { fetchuserByEmail } from '../service/userservice';
import { useParams } from "react-router-dom";

export function Profile()
 {
    const [userDetails, setUserDetails] = useState([]);
    const params=useParams();

    async function populateUserState() {
        try {
          const data = await fetchuserByEmail(params.email);  
          setUserDetails([data.user]);
      
          console.log("Data fetched from the database successfully");
        } catch (error) {
          console.log(error);
        }
      }
  
    useEffect(() => {
      populateUserState();
    }, []);
  
    return (
      <Container>
      <Row>
        <Col>
          <h2 style={{ color: 'White' }}>User Profile</h2>
          {userDetails.map((user, index) => (
            <div style={{ color: 'yellow' }} key={index}>
                 <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
    );
  }
