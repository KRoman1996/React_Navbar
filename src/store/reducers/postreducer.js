const initialGetPostsCountState = {
  posts: []
}

export const currentPosts = (state=initialGetPostsCountState,action) => {
  if (action.type === "setPosts") {
    if (state.posts === action.payload) {
      return state;
    }
    else {
      const newState = { ...state };
      const newPosts = action.payload;
      newState.posts = newPosts;
      //console.log(newState);
      return newState;
      
    }
  }
  else return state;
}
