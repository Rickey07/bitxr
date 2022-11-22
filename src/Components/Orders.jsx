import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap'
import OrderTable from './OrderTable';

const Orders = () => {
  return (
   <>
    <Container>
        <Card>
            <Card.Body>
                <Row>
                    <Col className='text-center'>
                        <span>Buy Orders</span>
                        <OrderTable/>
                    </Col>
                    <Col className='text-center'>
                       <span className='text-center'>Sell Orders</span>
                      <OrderTable/>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Container>
   </>
  )
}

export default Orders
