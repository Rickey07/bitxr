import React, { useState } from 'react';
import {Container,Row,Col, Card , Form , Button} from 'react-bootstrap';
import Orders from '../Components/Orders';
import { RelayPool , generatePrivateKey , getPublicKey } from 'nostr-tools';

const Register = () => {
    const [keys,setKeys] = useState(null)

    const handleClick = (e) => {
        e.preventDefault()
        let privateKey = generatePrivateKey();
        let publicKey = getPublicKey(privateKey);
        setKeys({...keys,privateKey,publicKey})
        alert("Save and use your keys for future login")
    }

    const copyKeys = (e) => {
        e.preventDefault()
        let allPara = document.querySelectorAll('.para');
    }

  return (
   <Container >
    <Card className='my-5'>
        <Card.Body>
            {keys && <>
            <div className='d-flex'>
                <p className="para">Your Private Key:- {keys.privateKey}</p>
                <p className="para">Your Public Key:- {keys.publicKey}</p>
                <Button variant='dark' onClick={copyKeys}> Copy to clipboard</Button>
            </div>
            </>}
            <Card.Title className='text-center'>Login or Register</Card.Title>
            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                 Public Key
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Public Key" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                 Private Key
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Private key" />
                </Col>
            </Form.Group>
            <div className='d-flex justify-content-center gap-4'>
                <button className='btn btn-outline-success' onClick={handleClick}>Register</button>
                <button className='btn btn-outline-info'>Login</button>
            </div>
            </Form>
        </Card.Body>
    </Card>
    <Orders/>
   </Container>
  )
}

export default Register
