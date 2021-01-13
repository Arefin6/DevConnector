  
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateProfileScreen from './components/screens/CreateProfileScreen';
import DashboardScreen from './components/screens/DashboardScreen';
import DetailsScreen from './components/screens/DetailsScreen';
import EditProfileScreen from './components/screens/EditProfileScreen';
import HomeScreen from './components/screens/HomeScreen';
import Login from './components/screens/Login';
import ProfileScreen from './components/screens/ProfileScreen';
import Register from './components/screens/Register';


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
           <Route path="/login" >
            <Login></Login>
           </Route>
           <Route path="/register" >
            <Register></Register>
           </Route>
           <Route path="/dashboard" >
            <DashboardScreen></DashboardScreen>
           </Route>
           <Route path="/createProfile" >
            <CreateProfileScreen></CreateProfileScreen>
           </Route>
           <Route path="/editProfile" >
            <EditProfileScreen></EditProfileScreen>
           </Route>
        
         </Switch>
       
       </main> 
       <Footer></Footer>
    </Router>
  );
}

export default App;
