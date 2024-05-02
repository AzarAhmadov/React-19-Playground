import { FC, useState } from 'react'
import { useFormStatus } from 'react-dom';
import { Posts } from '../ActionExample1/ActionExample1';

// PostItem component
const PostItem = ({ post }: any) => {
    return (
        <div className='posts'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

// SubmitButton Component
const SubmitButton = () => {

    const { pending } = useFormStatus()

    return (
        <button type='submit' disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button>
    )
}

// Post form
const Post = ({ addPost }: any) => {

    const formAction = async (formData: FormData) => {

        // Simulate a delay of 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 2000));

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
            <SubmitButton />
        </form>
    )
}

// Posts component
const UseFormStatusExample: FC = () => {

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

export default UseFormStatusExample
