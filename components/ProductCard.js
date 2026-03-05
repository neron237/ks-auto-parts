import React from 'react';
import Link from 'next/link';
const ProductCard = ({ id, name, price, description }) => {
    return (
        <div className="product-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <p className="price">${price}</p>
            <Link href={`/products/${id}`}> 
                <a className="btn">View Details</a>
            </Link>
            <button className="btn btn-primary">Add to Cart</button>
        </div>
    );
};
export default ProductCard;