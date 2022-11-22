import React from 'react';
import { Container } from 'react-bootstrap';
import './Styles/footer.css'

const Footer = () => {
  return (
    <Container className="bg-dark text-white footer text-center" fluid>
      <footer>
        <span>&copy; All Rights Reserved to cryptix hire 2022</span>
      </footer>
    </Container>
  )
}

export default Footer
