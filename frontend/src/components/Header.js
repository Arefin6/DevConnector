import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../actions/userAction';

const Header = () => {

    const dispatch = useDispatch()

    const userLoggedIn = useSelector(state => state.userLogin)
    const {userInfo} = userLoggedIn
    
    const handleLogout = () =>{
        dispatch(userLogout())
    }

    return (
        <header style={{fontFamily:"'Open Sans', sans-serif"}}>
          <Navbar bg='dark' className="text-white" variant='dark'>
             <Container>
              <Navbar.Brand href='/'>DevConnector</Navbar.Brand>

              <Nav className="mr-auto">
                  
              <Nav.Link  href="/profiles">Developers</Nav.Link>
              
              </Nav>
              <Nav className="ml-auto">
              {userInfo ? (
             <>   
              <Nav.Link href="/postFeed">Post Feed</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link onClick={handleLogout}>
                  <Image alt={userInfo.name} className="rounded-circle mr-2" style={{width:'35px', marginRight:'10px'}} src={userInfo.avatar} />
                  Logout</Nav.Link>
              </>
              ): (
              <>  
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">SignUp</Nav.Link>
              </>
              )} 
             
              </Nav> 

              </Container>
             
         </Navbar>  
            
        </header>
    );
};

export default Header;