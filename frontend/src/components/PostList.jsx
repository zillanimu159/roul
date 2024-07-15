import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import styles from './PostList.module.css'

function PostList() {
    const posts = useLoaderData();
    return (
        <>
            {posts.length &&
                (<ul className={styles.posts}>
                    
                    {posts.map((post) => <Post key={post.id} id={post.id} author={post.title} ingredients={post.ingredients} steps={post.steps}/>)}
                </ul>)}
            {posts.length === 0 && <div style={{ textAlign: "center", color: "white" }}>
                <h2>There are no posts yet...</h2>
                <p>Add some!</p>
            </div>}
        </>
    );
}

export default PostList;