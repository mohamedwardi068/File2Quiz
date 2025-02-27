import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Navbar  from "./components/navbar";
import  Header  from "./components/header";
import Footer from './components/footer';
import Searchbar from "./components/undernavbar.js";
import Path from "./components/path";
import Login from "./pages/login.js";
import SignUp from "./pages/signup.js";
import Profile from "./components/profile.js";
import Quizz from "./components/quiz.js";
import FileUpload from "./components/fileUpload.js";
import Popup from "./components/PopUp.js";







const App = () => {
  return (
    <Router>
      <Routes>
      <Route index element={<><Header/><Navbar /><Searchbar /><FileUpload/>  <Footer/> </>}/>
      <Route path="/quiz" element={<><Header/><Navbar /><Searchbar /><Quizz/>  <Footer/></>}/>
      <Route path="/login" element={<><Header/><Navbar/><Searchbar/><Path/><Login/><Footer/></>}/>
        <Route path="/signup" element={<><Header/><Navbar/><Searchbar/><Path/><SignUp/><Footer/></>}/>
        <Route path="/profile" element={<><Header/><Navbar/><Searchbar/><Profile/><Footer/></>}/>
         
      </Routes>
    </Router>
  );
};

export default App;
