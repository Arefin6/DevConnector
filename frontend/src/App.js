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
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

function App() {
  return (
    <Router>
     <Header></Header>
     <main className="py-3">
         
         <Switch>
           <Route path="/" exact>
            <HomeScreen></HomeScreen>
           </Route>
           <Route path="/login" exact>
            <LoginScreen></LoginScreen>
           </Route>
           <Route path="/register" exact>
             <RegisterScreen></RegisterScreen>
           </Route>
           <Route path="*" exact>
            <h2>Not Found</h2>
           </Route>
         </Switch>
       
       </main> 
       <Footer></Footer>
    </Router>
  );
}

export default App;
