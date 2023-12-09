

import React, { useState } from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Profile } from './Profile';
import { Edit } from './Edit';
import { Programs } from './Programs';
import { Delete } from './Delete';
import profilepic from "../Img/profile.png";
import { BMI } from './BMI';


export function Sidebar() {
  const [currentPage, setCurrentPage] = useState(null);
  const sidebarWidth = 200; // Set your desired sidebar width

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container fluid >
      <Row>
      <Col xs={3} className="sidebar sticky-top " style={{ width: `${sidebarWidth}px` }}>
          <Image src={profilepic} roundedCircle fluid />
          <div class="btn-class"> 
          
            <Button  variant="outline-secondary" onClick={() => handleButtonClick('profile')}>
              Profile
            </Button>          
             <Button   variant="outline-secondary" onClick={() => handleButtonClick('edit')}>
              Edit
            </Button>
            <Button   variant="outline-secondary" onClick={() => handleButtonClick('programs')}>
              Programs
            </Button>
            <Button   variant="outline-secondary" onClick={() => handleButtonClick('CalculateBmi')}>
              Calculate Your BMI
            </Button>
            <Button   variant="outline-secondary" onClick={() => handleButtonClick('delete')}>
              Delete  
            </Button>
          </div>
        </Col>
        <Col xs={9} className="content overflow-auto">
          {currentPage === 'profile' && <Profile />}
          {currentPage === 'edit' && <Edit />}
          {currentPage === 'programs' && <Programs />}
          {currentPage === 'CalculateBmi' && <BMI />}
          {currentPage === 'delete' && <Delete />}
        </Col>
      </Row>
    </Container>
  );
}  
  
 