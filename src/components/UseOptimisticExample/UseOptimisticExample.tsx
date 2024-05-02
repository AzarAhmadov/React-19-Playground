import { useOptimistic, useState, useRef, FC } from 'react';

const MessageForm: FC<any> = ({ addOptimisticMessage, sendMessage }) => {
    // Create a reference to the form
    const formRef = useRef();

    // This function is called when the form is submitted
    const formAction = async (formData: FormData) => {
        addOptimisticMessage(formData.get('message'));

        // Clear the form
        formRef.current.reset();

        await sendMessage(formData);
    };

    return (
        <form action={formAction} ref={formRef}>
            <input
                type='text'
                name='message'
                placeholder='Text'
                style={{ marginBottom: '10px', padding: "10px" }}
            />
            <button
                type='submit'
            >
                Send
            </button>
        </form>
    );
};

const Thread: FC<any> = ({ messages, sendMessage }) => {
    // The useOptimistic hook is used to add an optimistic message to the list of messages
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (state, newMessage) => [
            ...state,
            {
                text: newMessage,
                sending: true,
            },
        ]
    );

    return (
        <div>
            <MessageForm
                addOptimisticMessage={addOptimisticMessage}
                sendMessage={sendMessage}
            />
            {optimisticMessages.map((message, index) => (
                <div key={index} className='content'>
                    <span>{message.text}</span>
                    {message.sending && (
                        <div>(Sending...)</div>
                    )}
                </div>
            ))}
        </div>
    );
};

const deliverMessage = async (message: string) => {
    // Simulate a delay
    await new Promise((res) => setTimeout(res, 1000));
    return message;
};

const UseOptimisticExample = () => {
    const [messages, setMessages] = useState([]);

    async function sendMessage(formData: FormData) {
        const sentMessage = await deliverMessage(formData.get('message'));

        setMessages((messages) => [...messages, { text: sentMessage }]);
    }

    return <Thread messages={messages} sendMessage={sendMessage} />;
};

export default UseOptimisticExample