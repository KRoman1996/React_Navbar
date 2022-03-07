import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Feed from './pages/Feed/feed';
import FindFriends from './pages/findfriends';
import Profile from './pages/Profile/profile';
import SignIn from './pages/signin';
import withAuth from './components/withAuth';
import Main from './Main/index';
import Navbar from './components/Navbar/navbar';
import React from 'react';



const AuthenticatedFeed = withAuth(Feed)

function App() {
  return (
  <BrowserRouter>
   <Navbar />
   <Routes>
      <Route path="/feed" element={<Feed/>} />
      <Route path="/findfriends" element={<FindFriends/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Main />} />
   </Routes>
 </BrowserRouter>
  );
}

export default App;
