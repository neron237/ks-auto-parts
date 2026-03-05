// Product Details Page - Dynamic Route

import React from 'react';
import { useRouter } from 'next/router';

const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Product Details</h1>
            <p>Product ID: {id}</p>
            <p>This is the product details page for a specific product.</p>
            <button onClick={() => router.push('/cart')}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;