import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {
  return (
    <Router>
     <Header></Header>
     <main className="py-3">
         
         <Switch>
           <Route path="/" exact>
            <HomeScreen></HomeScreen>
           </Route>
         </Switch>
       
       </main> 
       <Footer></Footer>
    </Router>
  );
}

export default App;
