import React from 'react';
import Link from 'next/link';
const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <h1>KS Auto Parts</h1>
                </div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/cart">Cart</Link></li>
                    <li><Link href="/checkout">Checkout</Link></li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;