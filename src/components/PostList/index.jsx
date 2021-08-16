//libraries
import React from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";
//Components
import PostItem from "../PostItem";
//Styles
import '../../styles/App.css';

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                посты не найдены
            </h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={1000}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}

            </TransitionGroup>
        </div>
    );
};

export default PostList;