import React from 'react';
import classes from './PostsItem.module.css';
import { Link } from 'react-router-dom';
import  { MdEdit, MdDelete, MdInfoOutline } from 'react-icons/md';

const PostsItem = (props) => {

    const deletePost = () => {
        props.delete(props.id);
    }
    const selectPost = () => {
        props.selectPost(props.id);
    }

    return (
        <div className={classes.item}>
            <div className={classes.post}>
                <div>
                    <img src={props.photo} alt={''}/>
                </div>
                <div>
                    <div> {props.date} </div>
                    <div>
                        <h2>{props.title}</h2>
                    </div>
                    <div> {props.body} </div>
                </div>
                <div className={classes.edit} onClick={ selectPost }>
                    <Link to={'/edit'}> <MdEdit size={'20px'}/> </Link>
                </div>
                <div className={classes.edit} onClick={deletePost}><MdDelete size={'20px'}/></div>
                <div className={classes.edit} onClick={ selectPost }>
                    <Link to={'/details'}> <MdInfoOutline size={'20px'}/> </Link>
                </div>
            </div>
        </div>
    );
}

export default PostsItem;