//Kat -- getting most recent posts for the feed page

export const fetchAndDispatchPosts = (dispatch, getState) => {
  const url = "https://motion.propulsion-home.ch/backend/api/social/posts/";
  const method = "GET";
  const latestReduxState = getState();
  const token = localStorage.getItem("token"); 
  const headers = new Headers({'Authorization':`Bearer ${token}`});
  const config = {method,headers};
  fetch(url,config)
  .then(response => response.json())
  .then(data => {
    console.log(data.results);
    dispatch({ type: "setPosts", payload: data.results });
    dispatch({ type: "setProfile", payload: data.results[0].user })
    // console.log(data.results);
  })
}

//Kat -- posting a post (for now only text is working, still working on images)

export const dispatchPost = (dispatch, getState, content, images) => {
  const url = 'https://motion.propulsion-home.ch/backend/api/social/posts/';
  // const method = "POST";
  // const latestReduxState = getState();
  const token = localStorage.getItem("token"); 
  // const headers = new Headers({ 'Authorization': `Bearer ${token}` });
  // const contents = { content: 'test' }
  
  const contents = { content }

  const config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(contents)
  };
  // const config = {method,headers,body};
  fetch(url,config)
  .then(response => response.json())
  .then(data => {
    // dispatch({ type: "newPost", payload: data })
    console.log(data);
  })
}

// const bodyContents = { content }
//   const contents = { ...bodyContents, images }