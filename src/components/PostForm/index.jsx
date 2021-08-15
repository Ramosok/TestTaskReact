//libraries
import React, {useState} from 'react';
import MyInput from "../UI/MyInput";
import MyButton from "../UI/MyButton";
//Style
//import classes from './MyInput.module.css'


const PostForm = ( {create} ) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
    });
    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post, id: Date.now(),
        };
        create (newPost);
        setPost({
            title: '',
            body: '',
        });

    }
    return (
        <form>
            <MyInput
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
                type="text"
                placeholder="Name post"
            />
            <MyInput
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
                //ref = {bodyInputRef}
                type="text"
                placeholder="Body post"
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
}/*)*/;

export default PostForm;