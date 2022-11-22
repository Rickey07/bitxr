import React from 'react'
import { Form , Row,Container,Col,Card} from 'react-bootstrap';
import { relayPool, } from 'nostr-tools';

const pool = relayPool();

pool.addRelay('ws://some.relay.com', {read: true, write: true})
pool.addRelay('wss://nostr-pub.wellorder.net', {read: true, write: true})



const FinalOffer = () => {
  return (
    <Container>
    <Card>
        <Card.Body>
            <Card.Title className='text-center'>Create Offer</Card.Title>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Price
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="Enter Amount" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column className='mt-4' sm={2}>Limit</Form.Label>
                    <Col sm={5} className="text-center">
                        <Form.Label>Min</Form.Label>
                        <Form.Control type="text" placeholder="Enter Amount"/>
                    </Col>
                    <Col sm={5} className="text-center">
                        <Form.Label>Max</Form.Label>
                        <Form.Control type="text" placeholder="Enter Amount"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Payment Method
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="Release Address" />
                    </Col>
                </Form.Group>
                <div className='d-flex justify-content-center gap-4'>
                    <button className='btn btn-outline-success text-center'>Create</button>
                </div>
            </Form>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default FinalOffer
