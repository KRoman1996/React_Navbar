import {applyMiddleware, createStore, combineReducers} from "redux"
import thunk from "redux-thunk"
import { currentPosts } from "./reducers/postreducer.js"
import { profilePageReducer } from "./reducers/profilePageReducer"

//3. create and apply middleware (thunk)
const middlewares = applyMiddleware(thunk)

//4. exporting and creating store

const reducer = combineReducers({
    currentPosts,
    profilePageReducer
})

export const store = createStore(reducer,middlewares);
