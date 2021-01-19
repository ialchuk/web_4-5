import { connect } from 'react-redux';
import Posts from "./Posts";
import {
    deletePostAC, setTitlePostTextAC, setDescriptionPostTextAC, addPhotoAC,
    addPostAC, selectPostAC, editPostAC, singlePostsAC } from "../../redux/postsReducer";

const mapStateToProps = (state) => {
    return {
        posts: state.postsList.posts,
        searchPostsResult: state.postsList.searchPostsResult,
        selectedPost: state.postsList.selectedPost,
        singlePosts: state.postsList.singlePosts,
    }
};

export default connect(mapStateToProps, {
    deletePostAC, setTitlePostTextAC, setDescriptionPostTextAC,
    addPhotoAC, addPostAC, editPostAC, selectPostAC, singlePostsAC})(Posts);