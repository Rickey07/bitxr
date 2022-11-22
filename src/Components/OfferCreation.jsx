import React from 'react';
import {Container,Row,Col,Card,Form} from 'react-bootstrap'

const OfferCreation = () => {
  return (
    <Container>
        <Card>
            <Card.Body>
                <Card.Title className='text-center'>Accept Offer and Create Contract</Card.Title>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Amount
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" placeholder="Enter Amount" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Release Address
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

export default OfferCreation
