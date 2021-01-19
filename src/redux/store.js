import { createStore, combineReducers } from 'redux';
import postsReducer from "./postsReducer";

let reducers = combineReducers({
    postsList: postsReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;