//libraries
import React, {useState, useEffect /*useRef*/} from "react";
//Styles
import './styles/App.css';
//Components
import {useFetching} from "./components/hooks/useFetching";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal";
import MyButton from "./components/UI/MyButton";
import {usePost} from "./components/hooks/usePost";
import PostServce from "./api/PostServce";
import Loader from "./components/UI/Loader";



const App = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: '',})
    const [modal, setModal] = useState(false);
    const [fetchPosts,isPostsLoading,postError] = useFetching(async () => {
        const posts = await PostServce.getAll();
        setPosts(posts);
    })
    const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)


    useEffect(() => {
        fetchPosts()
    }, [])
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }
    //const bodyInputRef = useRef ()
    const removePost = id => {
        setPosts(posts.filter(post => post.id !== post.id));
    }
    return (
        <div className="App">
            <MyButton style={{marginTop: "30px"}}
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
            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
                :<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
            }
        </div>
    );
}

export default App;
