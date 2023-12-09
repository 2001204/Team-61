import { Form ,Button,Row,Col} from "react-bootstrap";

export function Edit(){

    return (
      <Row>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
             <Form.Control type="text" placeholder="Name" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Mobile No.</Form.Label>
            <Form.Control type="Number" placeholder="Mobile" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>D.O.B</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Edit Details
          </Button>
        </Form>
        </Row>
      );
}