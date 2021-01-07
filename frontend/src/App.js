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
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import SingleProfileScreen from './screens/SingleProfileScreen/SingleProfileScreen';

function App() {
  return (
    <Router>
     <Header></Header>
     <main className="py-3">
         
         <Switch>
           <Route path="/" exact>
            <HomeScreen></HomeScreen>
           </Route>
           <Route path="/login" >
            <LoginScreen></LoginScreen>
           </Route>
           <Route path="/profiles">
             <ProfileScreen></ProfileScreen>
           </Route>
           <Route   path="/profile/:slug" exact>
             <SingleProfileScreen></SingleProfileScreen>
           </Route>
           <Route path="/register">
             <RegisterScreen></RegisterScreen>
           </Route>
           <Route path="*">
            <h2>Not Found</h2>
           </Route>
         </Switch>
       
       </main> 
       <Footer></Footer>
    </Router>
  );
}

export default App;
