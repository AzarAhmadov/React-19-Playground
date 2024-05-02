import { FC, useState } from 'react'

export type Posts = {
    title: string,
    body: string
}

// PostItem component
const PostItem = ({ post }: any) => {
    return (
        <div className='posts'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

// Post form
const Post = ({ addPost }: any) => {

    const formAction = async (formData: FormData) => {

        const newPost = {
            title: formData.get('title'),
            body: formData.get('body')
        }

        addPost(newPost)
    }

    return (
        <form action={formAction}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' name='title' required placeholder='Enter title' />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <textarea name="body" placeholder='Enter body' required id="body"></textarea>
            </div>
            <button> Send </button>
        </form>
    )
}

// Posts component
const ActionExample1: FC = () => {

    const [posts, setPosts] = useState<Posts[]>([])

    const addPost = (newPost: Posts) => {
        setPosts((posts) => [...posts, newPost]);
    }

    return (
        <>
            <Post addPost={addPost} />
            {posts.map((post, index) => (
                <PostItem key={index} post={post} />
            ))}
        </>
    )
}

export default ActionExample1
