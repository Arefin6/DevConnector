import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Container} from 'react-bootstrap';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  return (
    <Router>
     <Header></Header>
     <main className="py-3">
         
     <Container>
         <Switch>
           <Route>

           </Route>
         </Switch>

      </Container> 
       
       </main> 
       <Footer></Footer>
    </Router>
  );
}

export default App;
