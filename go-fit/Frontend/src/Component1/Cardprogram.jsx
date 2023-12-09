
import { Col, Button, Row, Card } from "react-bootstrap";

export function Cardprogram() {

    const cardData = [
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../Img/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../Img/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'Pranayam yoga is a science of breathing or "control of breath". it is a breathing exercise that deals with various types of breath control. It can also be called yoga for relaxation of the mind, body, and soul. In Sanskrit, the word "Prana" means "breath", and "yama" means "control"',
            details: 'Details for Card 3', imageUrl: require('../Img/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../Img/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'gym', description: 'The physical and mental health benefits of exercise are often enough to encourage people to pay for membership. According to the NHS, exercise is a . Improved physical health, enhanced mental health, social interaction, increased energy and productivity, and personal achievement',
            details: 'Details for Card 2', imageUrl: require('../Img/pexels-yan-krukau-8436627(3).jpg')
        },

        {
            title: 'yoga', description: 'Pranayam yoga is a science of breathing or "control of breath". it is a breathing exercise that deals with various types of breath control. It can also be called yoga for relaxation of the mind, body, and soul. In Sanskrit, the word "Prana" means "breath", and "yama" means "control"',
            details: 'Details for Card 3', imageUrl: require('../Img/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'Pranayam yoga is a science of breathing or "control of breath". it is a breathing exercise that deals with various types of breath control. It can also be called yoga for relaxation of the mind, body, and soul. In Sanskrit, the word "Prana" means "breath", and "yama" means "control"',
            details: 'Details for Card 3', imageUrl: require('../Img/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../Img/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../Img/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../Img/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'gym', description: 'The physical and mental health benefits of exercise are often enough to encourage people to pay for membership. According to the NHS, exercise is a . Improved physical health, enhanced mental health, social interaction, increased energy and productivity, and personal achievement',
            details: 'Details for Card 2', imageUrl: require('../Img/pexels-yan-krukau-8436627(3).jpg')
        },
    ];


    return (
        <Row>
            {
                cardData.map((a) => {
                    return (
                        <Col lg={4} className="mt-4">
                            <Card>
                                <Card.Img variant="top" src={a.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{a.title}</Card.Title>
                                    <Card.Text>
                                        {a.description}
                                    </Card.Text>
                                    <Button variant="primary">Explore</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })
            }
        </Row>
    );
}