import React from 'react';
import '../Styles/product.css'

export default function EachProduct(props) {
    let { product, add } = props;
    return (
        <div className="product-body">
            <div className="description-part">
                <div className="image-section show">
                    <img className="Image-source" src={product.imageurl} alt="" />
                    <p className="offer-text"><b>{product.offertext}</b></p>
                </div>
                <div className="details-section show">
                    <h4 className="brand-name">{product.brandname}</h4>
                    <h5 className="product-name">{product.productname}</h5>
                    <p>Quantity {product.quantity}</p>
                    <p>MRP {product.mrp}.00</p>
                    <p><b>RS {product.price}.00</b></p>
                    <div className="tocart-quantity">
                        <div className="operations-product">
                            <button value={product.id} onClick={(e) => add(e, 'inc')}>ADD CART</button>
                        </div>
                        <div className="increase-decrease">
                            <button className="increase" value={product.id} onClick={(e) => add(e, 'inc') }>+</button>
                            <span className="incart-quantity">{product.incart}</span>
                            <button className="decrease" value={product.id} disabled={product.incart === 0} onClick={(e) => add(e, 'dec') }>-</button>
                        </div>
                    </div>
                </div>
            </div>
            {product.id !== 5 && <hr />}
        </div>
    )
}