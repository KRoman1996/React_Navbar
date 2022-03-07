// Kat - created this function to get all posts by getting the data from the API (25 posts), storing the data in the redux state in the postreducer, and render them as an unordered list using a map function iterating through the redux store.

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndDispatchPosts } from '../../store/actions/postactions';
import './styles.css';
import Moment from 'moment';

function Post() {
  

  const selector = reduxState => reduxState.currentPosts.posts;
  const reduxState = useSelector(selector);
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const allItems = reduxState;

  //   const clickHandler = () => {
  //     dispatch((dispatch,getState)=>dispatchPost(dispatch,getState,newPost,navigate));
  // }

  //

  useEffect(() => {
    dispatch((dispatch, getState) => fetchAndDispatchPosts(dispatch, getState));
  },
    []);

  return (
    <>
    {allItems && allItems.map((postItem, index) =>
      <li className="container" key={index}>
        <div>
          <div className='avatar-name-time'>
            <div className='avatar'>{postItem.user.avatar ? postItem.user.avatar : postItem.user.first_name.substring(0, 1)} </div>
            
            <div className='name-time'>
              <div className='full-name'>
                <p>{postItem.user.first_name}</p>
                <p>{postItem.user.last_name} </p>
              </div>
              <p className='time'>
                {Moment(postItem.created).format('MMMM DD')}
              </p>
            </div>
          </div>
    
          <div className='content'>
            <p>{postItem.content}
            </p>
          </div>
              
          {postItem.user.images}
              
          {/* === Moment().format('DD/MM/YY') ?
              Moment().format('HH') === Moment(postItem.created).format('HH') ? 'Just now' :
                Moment(postItem.created).format('MMMM DD') */}
            
          <div className='social-buttons'>
            <div className='soc-button'>
              <div className='heart-arrow-button'><img className="heart-button" src="../heart.png" alt={postItem.id}
              // onClick={(e) => dispatch({ type: "addItem", payload: (e.target.alt) })}
              /><p>Like</p>
              </div>
            
              <div className='heart-arrow-button'><img className="arrow-button" src="../arrow.png" alt={postItem.id}
              // onClick={(e) => dispatch({ type: "addItem", payload: (e.target.alt) })}
              /><p>Share</p>
              </div>
            </div>
            
            <div className='likes'>
              <p>{postItem.amount_of_likes + ' likes'}</p>
            </div>
              
          </div>
        </div>
      </li>
    )} 
    </>
    
    
)
}


export default Post;