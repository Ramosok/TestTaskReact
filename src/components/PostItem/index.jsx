//libraries
import React from 'react';
import MyButton from "../UI/MyButton";
//Components

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="poct__countent">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btn">
                <MyButton
                    onClick={() => props.remove (console.log(props.post))}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;