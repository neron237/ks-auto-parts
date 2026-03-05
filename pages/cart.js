// Shopping Cart Page

import React from 'react';
import { useRouter } from 'next/router';

const Cart = () => {
    const router = useRouter();

    return (
        <div>
            <h1>Shopping Cart</h1>
            <p>Your cart items will appear here.</p>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Add cart items here */}
                </tbody>
            </table>
            <button onClick={() => router.push('/checkout')}>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;