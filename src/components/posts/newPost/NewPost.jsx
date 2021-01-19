import React from 'react';
import classes from './NewPost.module.css';
import {Link} from "react-router-dom";

const NewPost = (props) => {
    const titleOnChange = (e) => {
        let text = e.target.value;
        props.setTitlePostTextAC(text);
    }
    const descriptionOnChange = (e) => {
        let text = e.target.value;
        props.setDescriptionPostTextAC(text);
    }
    const loadPhoto = (e) => {
        props.addPhotoAC(e.target.files[0]);
    }
    const addPost = () => {
        props.addPostAC();
    }
    return (
        <div className={classes.newPost}>
            <div className={classes.photoContainer}>
                <div className={classes.photo}>
                    <input type={'file'} onChange={loadPhoto} />
                </div>
            </div>
            <div className={classes.text}>
                <textarea type={'text'} placeholder={'Title'} onChange={titleOnChange}>
                    {props.post ? props.post.title : null}
                </textarea>
                <textarea placeholder={'Description'} onChange={descriptionOnChange}>
                    {props.post ? props.post.body : null}
                </textarea>
            </div>
            <div className={classes.add}>
                <button onClick= { addPost }> <Link to='/'>Add</Link></button>
            </div>
        </div>
    );
}

export default NewPost;