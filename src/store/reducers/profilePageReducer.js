/* 
Nico= 
I created this reducer for my work and testing in the profile page... I added a token here but I know that in the final product
this page will just grab the token retrieved in the login page.

For now I added a fetch/authentication login in profile just for testing purposes
*/


const initialState = {
    token: undefined,
    name: undefined,
    postsCount: 0,
    likesCount: 0,
    friendsCount: 0,
    followersCount: 0,
    followingCount: 0
}


export const profilePageReducer = (state = initialState, action) => {
    if(action.type === 'setToken'){
        console.log('in reducer')
        const newState = {...state};
        newState.token = action.payload;
        return newState;
    }
    else if(action.type === 'setProfile')   {
        const newState = {...state};
        newState.name = action.payload.first_name;
        newState.postsCount = action.payload.amount_of_posts;
        newState.friendsCount = action.payload.amount_of_friends;
        newState.followersCount = action.payload.amount_of_followers;
        newState.followingCount = action.payload.amount_following;
        newState.likesCount = action.payload.amount_of_likes;
        return newState;
    }
    else {
        return state;
    }
    
}