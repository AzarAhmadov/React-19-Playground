import { FC, Suspense, use } from 'react'

interface Iposts {
    id: number,
    title: string,
    body: string
}

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostItems = () => {
    const posts = use(fetchPosts());

    return (
        <ul>
            {posts.map((post: Iposts) => (
                <li key={post.id} className='item'>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
};

const UseExample2: FC = () => {
    return (
        <Suspense
            fallback={
                <h2 className='loading'>Loading...</h2>
            }
        >
            <div className="example">
                <PostItems />
            </div>
        </Suspense>
    )
}

export default UseExample2
