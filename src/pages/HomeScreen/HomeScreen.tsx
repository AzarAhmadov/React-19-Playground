import { FC } from 'react'
import { Link } from 'react-router-dom'

const HomeScreen: FC = () => {
    return (
        <>
            <section className='container'>
                <h3 className='examples'> Examples <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.278 2.231a1.001 1.001 0 0 0-.64-.231H5a2 2 0 0 0-2 2v7.21a2 2 0 0 0 1.779 1.987L12 14v6a2 2 0 0 0 4 0V8l3.03 1.212a2.001 2.001 0 0 0 2.641-1.225l.113-.34a.998.998 0 0 0-.309-1.084l-5.197-4.332z"></path></svg> </h3>
                <div className="row">
                    <div className='item'>
                        <h4> use() Hook Example 1 </h4>
                        <p>
                            Use the `use()` hook to fetch a random joke from the Chuck
                            Norris API
                        </p>
                        <Link to={'/use-example-1'}>
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </Link>
                    </div>

                    <div className='item'>
                        <h4> use() Hook Example 2 </h4>
                        <p>
                            Use the `use()` hook to fetch some posts from the
                            JSONPlaceholder API
                        </p>
                        <Link to={'/use-example-2'}>
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </Link>
                    </div>

                    <div className='item'>
                        <h4> use() Hook Example 3 </h4>
                        <p>
                            Use the `use()` hook to resolve a message from a promise and
                            show it
                        </p>
                        <Link to={'/use-example-3'}>
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </Link>
                    </div>

                    <div className='item'>
                        <h4> use(context) Example </h4>
                        <p>
                            Use the `use()` hook to apply aa theme context
                        </p>
                        <Link to={'/use-example-context'}>
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </Link>
                    </div>

                    <div className='item'>
                        <h4> Action Example 1 </h4>
                        <p>
                            Use an action to submit a post form
                        </p>
                        <Link to={'/action-example-1'}>
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </Link>
                    </div>

                    <div className='item'>
                        <h4> Action Example 2 </h4>
                        <p>
                            Use an action to add product to cart via form
                        </p>
                        <Link to={'/action-example-2'}>
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </Link>
                    </div>

                    <div className='item'>
                        <h4> useFormStatus Example </h4>
                        <p>
                            Use the useFormStatus hook to get status of post form submission
                        </p>
                        <Link to={'/useFormStatus'}>
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </Link>
                    </div>

                    <div className='item'>
                        <h4> useFormState Example </h4>
                        <p>
                            Use the useFormState Hook to show specific messages for cart
                            items
                        </p>
                        <Link to={'/useFormState'}>
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </Link>
                    </div>

                    <div className='item'>
                        <h4> useOptimisitc Example </h4>
                        <p>
                            Use the useOptimistic hook to show a message before the server
                            responds
                        </p>
                        <Link to={'/useOptimisticExample'}>
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </Link>
                    </div>

                    <div className='item'>
                        <h4> useTransition Example </h4>
                        <p>
                            Use the useTransition hook to show a message before the server
                            responds
                        </p>
                        <Link to={'/useTransitionExample'}>
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeScreen
