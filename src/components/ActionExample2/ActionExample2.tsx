import { FC, useState } from 'react';

type Cards = {
    id: string,
    title?: string,
    addToCart: any
}

// AddToCartForm component
const AddToCartForm: FC<Cards> = ({ id, title, addToCart }) => {

    const formAction = async (formData: any) => {
        try {
            await addToCart(formData, title);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            action={formAction}
        >
            <h2>{title}</h2>
            <input type='hidden' name='itemID' value={id} className='hidden' />
            <button
                type='submit'
                style={{ marginTop: '10px' }}
            >
                Add to Cart
            </button>
        </form>
    );
};

// CartDisplay component
const CartDisplay = ({ cart }: any) => {
    if (cart.length === 0) {
        return null;
    }
    return (
        <div className='cart'>
            <h2>Your Cart:</h2>
            <ul>
                {cart.map((item: Cards[], index: number) => (
                    <li key={index}>{item?.title}</li>
                ))}
            </ul>
        </div>
    );
};

// ShoppingCart component
const ActionExample2: FC = () => {

    const [cart, setCart] = useState<Cards[]>([]);

    const addToCart = async (formData: FormData, title: string) => {

        const id = String(formData.get('itemID'));
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setCart((cart) => [...cart, { id, title }]);

        return { id };
    };

    return (
        <>
            <CartDisplay cart={cart} />
            <AddToCartForm
                id='1'
                title='Cart 1'
                addToCart={addToCart}
            />
            <AddToCartForm
                id='2'
                title='Cart 2'
                addToCart={addToCart}
            />
        </>
    );
};

export { ActionExample2 };