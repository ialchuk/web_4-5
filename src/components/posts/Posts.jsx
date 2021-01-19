import React from 'react';
import classes from './Posts.module.css';
import PostsItem from "./postsItem/PostsItem";
import { Switch, Route } from "react-router-dom";
import NewPost from "./newPost/NewPost";
import Details from "./details/Details";

const Posts = (props) => {

    return (
        <div className={classes.posts}>
            <Switch>
                <Route path={'/newpost'}
                       render={() => <NewPost setTitlePostTextAC={props.setTitlePostTextAC}
                                              setDescriptionPostTextAC={props.setDescriptionPostTextAC}
                                              addPhotoAC={props.addPhotoAC} addPostAC={props.addPostAC}/>}/>
                <Route path={'/details'}
                       render={() => <Details post={props.selectedPost} singlePosts={props.singlePosts}
                                              showSinglePosts={props.singlePostsAC}/>}/>
                <Route path={'/edit'} render={ () => <NewPost post={props.selectedPost}
                                                              setTitlePostTextAC={props.setTitlePostTextAC}
                                                              setDescriptionPostTextAC={props.setDescriptionPostTextAC}
                                                              addPhotoAC={props.addPhotoAC}
                                                              addPostAC={props.editPostAC}/> } />
                <Route path={''} render={ () =>
                    <>
                        {
                            props.searchPostsResult
                                ? props.searchPostsResult
                                    .map( (post) => <PostsItem id={post.id} photo={post.photo} date={post.date}
                                                               title={post.title} body={post.body}
                                                               delete={props.deletePostAC}
                                                               selectPost={props.selectPostAC} /> )
                                : props.posts
                                    .map( (post) => <PostsItem id={post.id} photo={post.photo} date={post.date}
                                                               title={post.title} body={post.body}
                                                               delete={props.deletePostAC}
                                                               selectPost={props.selectPostAC} /> )
                        }
                    </> } />
            </Switch>
        </div>
    );
}

export default Posts;