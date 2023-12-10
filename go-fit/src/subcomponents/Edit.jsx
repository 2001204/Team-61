import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchuserByEmail, updateuser, deleteuser } from "../service/userservice";
import { useNavigate } from "react-router-dom";

export function Edit() {
  const navigate=useNavigate();
  const params = useParams();
  const [formData, setFormData] = useState({ email: "", username: "", password: "", phone:"" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentuser, setCurrentuser] = useState("");
  const [showDialog, setShowDialog] = useState(false); // Define showDialog state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const result = await updateuser(formData, params.email);
      console.log(params.email);
      setIsSubmitted(true);
      setTimeout(() => {
        alert('User Updated')
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStudentDelete = async () => {
    try {
      await deleteuser(params.email); // Use params.email instead of useremail
      populateuserState();         // Assuming populateStudentState is defined
      closeModalDialog();
      navigate("/signup");
    } catch (error) {
      console.log(error);
    }
  }

  const populateuserState = async () => {
    try {
      const result = await fetchuserByEmail(params.email);
      setFormData(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    populateuserState();
  }, [params.email]);

  const openModalDialog = () => {
    setShowDialog(true);
  }

  const closeModalDialog = () => {
    setShowDialog(false);
  }

  return (
    <>
      <Container>
        {formData ? (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.email}
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.username}
                    placeholder="Enter name"
                    name="username"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.password}
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone: </Form.Label>
                  <Form.Control
                    type="String"
                    value={formData.phone}
                    placeholder="enter phone"
                    name="phone"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>

              <Col lg={3}>
                <Button variant="primary" type="submit">
                  Update
                </Button>

                
              </Col>
            </Row>
          </Form>
          

        ) : (<p>No data found for the given email.</p>)}

                <Button variant="primary" type="submit" onClick={() => {
                  openModalDialog();
                  setCurrentuser(formData.email);
                }}>
                  Delete
                </Button>

        <Modal show={showDialog} onHide={closeModalDialog}>
          <Modal.Header closeButton> <Modal.Title>Confirmation</Modal.Title>           </Modal.Header>
          <Modal.Body>Do you really want to delete student with e-mail {currentuser}?</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={() => {
              handleStudentDelete();
            }}>
              Yes
            </Button>
            <Button variant="danger" onClick={closeModalDialog}>
              No
            </Button>
          </Modal.Footer>

        </Modal>
      </Container>
    </>
  );
}








