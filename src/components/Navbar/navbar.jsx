// import './styles.css';
import React, { useState, useEffect } from 'react';
import './styles.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndDispatchPosts } from '../../store/actions/postactions';

function Navbar() {
    let navigate = useNavigate();
    const [state, setState] = useState('/');
    const routeChange = (url) =>{ 
        let path = url;
        setState(url) 
        navigate(path);
    }
    const selector = reduxState => reduxState.currentPosts.posts;
    const profile_selector = reduxState => reduxState.profilePageReducer;
    const profileState = useSelector(profile_selector);
    const reduxState = useSelector(selector);
    const dispatch = useDispatch();

    const profileData = profileState;
    const allItems = reduxState;
    console.log(profileData);
    useEffect(() => {
        dispatch((dispatch, getState) => fetchAndDispatchPosts(dispatch, getState));
      },    []);

    if(!allItems)   {
        return (
            <div></div>
        )
    }
    return(
        <div className='Navbar'>
            <div className="navbar-left">
                <div className = "motion  curser-pointer" onClick = {() => routeChange('/')}>
                    <img src="./Logo.png"/>
                    <div className="letter">Motion</div>
                </div>
                <div className ={(state !== "/feed" ? 'motion1' : 'motion1 item_active') + ' curser-pointer'} onClick = {() => routeChange('/feed')}>
                    <img src="./Shape.png"/>
                    <div className="letter">Post</div>
                </div>
                <div className = {(state !== "/findfriends" ? 'motion1' : 'motion1 item_active') + ' curser-pointer'} onClick = {() => routeChange('/findfriends')}>
                    <img src="./friend.png"/>
                    <div className="letter">Find Friends</div>    
                </div>
            </div>
            <div className="navbar-left">
                <div className="notify">
                    <img src="./notify.png" className = "curser-pointer" />
                    <div className="notify_count text-center">{profileData.likesCount}</div>
                </div>
                <div className='avatar curser-pointer'><img src={allItems.length !== 0 && (allItems[0].user.avatar ? allItems[0].user.avatar : allItems[0].user.first_name.substring(0, 1))} /> </div>
                <img className="curser-pointer" src="./dot3.png"/>
            </div>
        </div> 
    )
}
export default Navbar;