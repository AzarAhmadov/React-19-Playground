import { FC } from 'react'
import { useFormState } from 'react-dom';

type UseFormStateExample = {
    itemID: string,
    itemTitle: string
}

const addToCart: FC<any> = (prevState, queryData) => {
    const itemID = queryData.get('itemID');
    if (itemID === '1') {
        return 'Added to cart';
    } else {
        return "Couldn't add to cart: the item is sold out.";
    }
};

const UseFormStateExample: FC<UseFormStateExample> = ({ itemID, itemTitle }) => {

    const [message, formAction] = useFormState(addToCart, null);

    return (
        <form action={formAction}>
            <h2 className='text-xl font-bold mb-4'>{itemTitle}</h2>
            <input type='hidden' name='itemID' value={itemID} />
            <button
                type='submit'
                style={{ marginTop: '10px' }}
            >
                Add to Cart
            </button>
            {message &&
                <p style={{ marginTop: '10px' }}>
                    {message}
                </p>}
        </form>
    )
}

export default UseFormStateExample
