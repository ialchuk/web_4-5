import React from 'react';
import classes from './Details.module.css';
import PostsItem from "../postsItem/PostsItem";

class Details extends React.Component {

    state = { showButton: false }

    onClickShowButton = () => {
        this.props.showSinglePosts();
        this.setState({showButton: true} )
    }
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.details}>
                    <div>
                        <img src={this.props.post.photo} alt={''}/>
                    </div>
                    <div>
                        <h2>Title:</h2>
                        <div> {this.props.post.title} </div>
                        <h2>Description:</h2>
                        <div> {this.props.post.body} </div>
                    </div>
                    <div className={classes.date}>Date: {this.props.post.date}</div>
                </div>
                <div className={classes.singlePosts}>
                    <h2 align={'center'}>Single Posts</h2>
                    <div>
                        <button onClick={this.onClickShowButton}>Show Single Posts</button>
                    </div>
                    {
                        this.state.showButton
                            ? this.props.singlePosts
                            ? this.props.singlePosts.map((post) => <PostsItem id={post.id} photo={post.photo}
                                                                              date={post.date}
                                                                              title={post.title} body={post.body}
                                                                              delete={this.props.deletePostAC}
                                                                              selectPost={this.props.selectPostAC}/>)
                            : <h3 color={'brown'}>Haven't single posts</h3>
                            : null}
                </div>
            </div>
        );
    }
}

export default Details;