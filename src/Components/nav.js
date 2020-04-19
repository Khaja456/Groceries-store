import React from 'react';
import '../Styles/nav.css';

export default function NavHeader() {
    return (
        <div>
            <ul>
                <li><a href="#">Groceries App</a></li>
                <li><a className="active" href="#">Order</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    )
}