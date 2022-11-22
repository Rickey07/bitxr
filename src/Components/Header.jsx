import React from 'react';
import {Container,Row,Col,Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Styles/header.css'

const Header = () => {
  return (
   <Container fluid className="bg-dark header text-white">
    <Container>
      <Row className='d-flex align-items-center justify-content-space-between'>
        <Col xs={6} md={6}>Logo</Col>
        <Col xs={6} md={6} className="d-flex justify-content-end">
            <Nav>
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/">Register</Link></Nav.Link>
              <Nav.Link><Link to="/contract">Contract</Link></Nav.Link>
              <Nav.Link><Link to="/offer">Create Offer</Link></Nav.Link>
              <Nav.Link><Link to="/orders">Orders</Link></Nav.Link>
            </Nav>
        </Col>
      </Row>
    </Container>
   </Container>
  )
}

export default Header
