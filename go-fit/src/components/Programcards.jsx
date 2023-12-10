
import { Card, CardGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import card11 from "./images/card11.jpg";
import card12 from "./images/card12.jpg";
import card13 from "./images/card13.jpg";
import PricingTable from "./PricingTable";

export function Programcards() {
  return (
    <Container>
      <CardGroup>
       <Card className="me-2">
                
                    <Card.Img variant="top" src={card11} />
                    <Card.Body>
                        <Card.Title>WorkOut- physical activity can improve your muscle strength and boost your endurance</Card.Title>
                        <Card.Text>
                           
                        </Card.Text>
                    </Card.Body>
        
                </Card>

                <Card className="me-2">
                    <Card.Img variant="top" src={card12} />
                    <Card.Body>
                        <Card.Title>Yoga </Card.Title>
                        <Card.Text>
                        -Yoga improves strength, balance and flexibility.It uses physical postures, breathing exercises, and meditation to improve overall health.
                        </Card.Text>
                    </Card.Body>
            
                </Card>
                <Card className="me-2">
                    <Card.Img variant="top" src={card13} />
                    <Card.Body>
                        <Card.Title>Meditation </Card.Title>
                        <Card.Text>- Excellence to Godliness It's about training in awareness and getting a healthy sense of perspective.
                        
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardGroup>
            <PricingTable></PricingTable>
    </Container>
  );
}
export default Programcards;