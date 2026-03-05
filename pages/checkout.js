// Checkout Page

import React from 'react';

const Checkout = () => {
    return (
        <div>
            <h1>Checkout Page</h1>
            <p>Thank you for your order!</p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Checkout;