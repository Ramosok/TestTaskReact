//libraries
import React, {useState, useMemo, /*useRef*/} from "react";
//Styles
import './styles/App.css';
//Components
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal";
import MyButton from "./components/UI/MyButton";

const App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "Description"},
        {id: 2, title: "JavaScript", body: "Description"},
        {id: 3, title: "JavaScript", body: "Description"},
    ]);
    const [filter, setFilter] = useState({sort: '', query: '',})
    const [modal, setModal] = useState(false);

    const sortedPost = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPost])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }
    //const bodyInputRef = useRef ()
    const removePost = (post) => {
        setPosts(posts.filter(post => post.id !== post.id));
    }
    return (
        <div className="App">
            <MyButton
                onClick={() => setModal(true)}
            >
                Create Post
            </MyButton>
            <MyModal
                visible={modal}
                setvisible={setModal}
            >
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
        </div>
    );
}

export default App;
