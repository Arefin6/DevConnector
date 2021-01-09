import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header style={{fontFamily:"'Open Sans', sans-serif"}}>
          <Navbar bg='dark' className="text-white" variant='dark'>
              <Container>
              <Navbar.Brand href='/'>DevConnector</Navbar.Brand>

              <Nav className="mr-auto">
                  
              <Nav.Link  href="/profiles">Developers</Nav.Link>
              
              </Nav>
              <Nav className="ml-auto">
              
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">SignUp</Nav.Link>

              </Nav> 

              </Container>
             
         </Navbar>  
            
        </header>
    );
};

export default Header;