import './profile.css'
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Profile = () => {

  const selector = reduxState => reduxState;
  const token = useSelector(selector)

  if(token) {
    console.log('logged in', token);
  }

  const dispatch = useDispatch();
  
  const [email,setEmail] = useState('nicolasmarinw@gmail.com');
  const [password,setPassword] = useState('thunk');


  useEffect(() => {
    console.log('element loaded');
    const url = 'https://motion.propulsion-home.ch/backend/api/auth/token/';
    const method = 'POST';
    const headers = new Headers({'Content-type':'application/json'});

    let body = {email,password};
    body = JSON.stringify(body);
    const config = {method,headers,body};

    fetch(url,config)
      .then(response => response.json())
      .then(data => 
        dispatch({
          type: 'setToken',
          payload: data.access
        })
      )
  })


  return (
    <>
      <header> Default Header (will wait for Fedor's version</header>
      <div className='content-container'>
        <UserProfileCard />
        <div className="posts-container">posts</div>

      </div>
    </>

  )
  
}

export default Profile;