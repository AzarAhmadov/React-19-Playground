import { useState, Suspense, FC, use } from 'react';

interface MessageContainerProps {
    messagePromise: Promise<string>;
}

// Simulate fetching a message
const fetchMessage = (): Promise<string> => {
    return new Promise((resolve) => setTimeout(resolve, 1000, 'You are an awesome developer :)'));
}

// MessageOutput component
const MessageOutput: FC<MessageContainerProps> = ({ messagePromise }) => {
    const messageContent = use(messagePromise);
    return <div className='content'> <p>Here is the message: {messageContent}</p></div>;
};

// MessageContainer component
const MessageContainer: FC<MessageContainerProps> = ({ messagePromise }) => {
    return (
        <Suspense fallback={<div className='content'><p>⌛Downloading message...</p></div>}>
            <MessageOutput messagePromise={messagePromise} />
        </Suspense>
    );
};

const UseExample3: FC = () => {
    
    const [messagePromise, setMessagePromise] = useState<Promise<string> | null>(null);

    function download() {
        setMessagePromise(fetchMessage());
    }

    return (
        <div className="content">
            {messagePromise ? (
                <MessageContainer messagePromise={messagePromise} />
            ) : (
                <button
                    className='download'
                    onClick={download}
                >
                    Download message
                </button>
            )}
        </div>
    );
}

export default UseExample3;
