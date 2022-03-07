//Kat -- Feed Page - gets most recent posts using the Post component. Created a temporary login link for testing with hardcoded credentials. Includes a modal for new posts where one can make a post with text (still working on images)

import { useState } from 'react'
import {useDispatch} from "react-redux"
import Post from '../../components/Post/post'
import './styles.css';
import { dispatchPost } from '../../store/actions/postactions';
import { useNavigate } from "react-router-dom";
import {fetchAndDispatchToken} from "../../store/actions/actions";


const Feed = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Temporary login for testing

  const [email, setEmail] = useState("kattesteremail1@gmail.com");
  const [password, setPassword] = useState("test123");


  const loginClickHandler = () => {
    dispatch((dispatch, getState) => fetchAndDispatchToken(dispatch, getState, email, password, navigate));
  }
  //Temporary login for testing

  const [content, setContent] = useState('test');
  const [images, setImages] = useState([]);
  //const [shared, setShared] = useState('');

  const handleUpload = (e) => {
    const imageUrls = [...e.target.files].map((file) => {
      return URL.createObjectURL(file);
    })
    // const newImage = e.target.files[0];
    // setImages(URL.createObjectURL(newImage));
    // console.log(imageUrls);
    setImages(imageUrls);
    console.log(images)
  }

  const newPostClickHandler = () => {
    dispatch((dispatch, getState) => dispatchPost(dispatch, getState, content, images));
  }

  //toggle for form modal
  const [visibility, setVisibility] = useState(false);
  
  // modal that shows up once visibility is set to true to complete the new post form

  const postWindow = 
  <div className="modal-container">
    <section className="modal">
      <div className='buttonSection'>
        <img className="closeButton" src="../close.png" alt="close" onClick={() => setVisibility(false)}/>
      </div>
      
      {/* new post form */}
      <form>
          <div className='inputSection'>
            
          {/* text content */}
          <input className="myInputs" type="text" placeholder={content} value={content} onChange={e => setContent(e.target.value)}></input>
 
          {/* image */}
            <input multiple className="myImage" type="file" value="" accept="image/*" name="" onChange={handleUpload}>
            </input>
            
          {/* preview of images by mapping through chosen images */}
          {images && images.map((image) => {
            return <img src={image} key={image} width="200" alt="image"/>
          })}
  
          </div>
        </form>
      <button onClick={newPostClickHandler}>Submit</button>
    </section>
  </div>
        
  return (
    <div className = "body">
       <button onClick={loginClickHandler}>Login</button>
     
      {visibility ? postWindow : null}

      <ul className="container">
        <li>
          <input className="myInputs" type="text" placeholder="What's on your mind?" value={content} onChange={e => setContent(e.target.value)}>
          </input>

          <button className="myButtons" onClick={() => setVisibility(true)}>
            Send Post
          </button>       
        </li>
      <Post />
    </ul>
  </div>
  )
}

export default Feed;