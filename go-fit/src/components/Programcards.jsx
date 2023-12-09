
import { Card, CardGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import card11 from "./images/card11.jpg";
import card12 from "./images/card12.jpg";
import card13 from "./images/card13.jpg";

export function Programcards() {
  return (
    <Container>
      <CardGroup>
       <Card className="me-2">
                
                    <Card.Img variant="top" src={card11} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card className="me-2">
                    <Card.Img variant="top" src={card12} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className="me-2">
                    <Card.Img variant="top" src={card13} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
    </Container>
  );
}
export default Programcards;