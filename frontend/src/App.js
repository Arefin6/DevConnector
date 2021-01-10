  
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import DetailsScreen from './components/screens/DetailsScreen';
import HomeScreen from './components/screens/HomeScreen';
import ProfileScreen from './components/screens/ProfileScreen';


function App() {
  return (
    <Router>
      <Header></Header>
     <main className="py-3">
         
         <Switch>
         <Route path="/" exact>
            <HomeScreen></HomeScreen>
           </Route>
           <Route path="/profiles" >
            <ProfileScreen></ProfileScreen>
           </Route>
           <Route path="/profile/:userid" exact >
            <DetailsScreen></DetailsScreen>
           </Route>
        
         </Switch>
       
       </main> 
       <Footer></Footer>
    </Router>
  );
}

export default App;
