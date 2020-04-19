import React from 'react';
import Model from './model';

export default function ShopCart(props) {
    let { products, model, toggle, reset } = props;
    let totalQuantity = products.reduce((total, curr) => { return total + curr.incart }, 0);
    let totalPrice = products.reduce((total, curr) => { return total + (curr.incart * curr.price) }, 0)
    return (
        <div className="cart-part">
            <div className="details">
                <p className="quantity-prod"><b>QTY</b> {totalQuantity}</p>
                <p><b>Total</b> {totalPrice}</p>
            </div>
            <div className="checkout">
                <Model show={model} toggle={toggle} price={totalPrice} reset={reset} />
            </div>
        </div>
    )
}