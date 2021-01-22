  
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AddExperienceScreen from './components/screens/AddExperienceScreen';
import CreateProfileScreen from './components/screens/CreateProfileScreen';
import DashboardScreen from './components/screens/DashboardScreen';
import DetailsScreen from './components/screens/DetailsScreen';
import EditProfileScreen from './components/screens/EditProfileScreen';
import HomeScreen from './components/screens/HomeScreen';
import Login from './components/screens/Login';
import AddEducationScreen from '../src/components/screens/AddEducationScreen'
import ProfileScreen from './components/screens/ProfileScreen';
import Register from './components/screens/Register';
import PostFeedScreen from './components/screens/posts/PostFeedScreen';
import PostSingle from './components/screens/posts/PostSingle';


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
           <Route path="/addExperience" >
            <AddExperienceScreen></AddExperienceScreen>
           </Route>
           <Route path="/addEducation" >
            <AddEducationScreen></AddEducationScreen>
           </Route>
           <Route path="/postFeed" >
            <PostFeedScreen></PostFeedScreen>
           </Route>
           <Route path="/post/:id" >
            <PostSingle></PostSingle>
           </Route>
        
         </Switch>
       
       </main> 
       <Footer></Footer>
    </Router>
  );
}

export default App;
