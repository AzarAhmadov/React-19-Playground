import { use, Suspense } from 'react';

const fetchJoke = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    return res.json();
};

const JokeItem = () => {
    const joke = use(fetchJoke());
    return (
        <h2 className='item'>{joke.value}</h2>
    );
};

const UseExample1 = () => {
    return (
        <Suspense
            fallback={
                <h2 className='loading'>Loading...</h2>
            }
        >
            <div className="example">
                <JokeItem />
            </div>
        </Suspense>
    );
};

export default UseExample1;