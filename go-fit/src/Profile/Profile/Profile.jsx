import React, { useEffect, useState } from 'react';

import {Table, Col, Container, Row } from 'react-bootstrap';
import { fetchuserByEmail } from '../../service/userservice';
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
            <div style={{ color: 'black', fontSize: '20px' }} key={index}>
                 <Table cellPadding={40}>

                 <tr>
                  <td><b>Name         : </b>{user.username}</td>
                  <td><b>Gmail Account:  </b>{user.email}</td>
                 </tr>
                 <tr>
                  <td><b>Contact No   : </b>{user.phone}</td>
                  <td><b>Gender       : </b>{user.gender}</td>
                 </tr>
                 <tr>
                  <td><b>Blood Group  : </b>{user.bloodgroup}</td>
                  <td><b>Age          : </b>{user.age}</td>
                 </tr>
                 <tr>
                  <td><b>Weight       : </b>{user.weight}</td>
                  <td><b>height       : </b>{user.height}</td>
                 </tr>
                 </Table>

            </div>
          ))}
        </Col>
      </Row>
    </Container>
    );
  }