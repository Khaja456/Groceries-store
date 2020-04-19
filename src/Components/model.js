import React from 'react';
import '../Styles/model.css';
var classNames = require('classnames');

export default function CheckoutModel(props) {
    return (
        <div>
            <div className="center">
                <button onClick={props.toggle} disabled={props.price <= 0}><b>CHECKOUT</b></button>
            </div>
            <div id="myModal" className={classNames("modal", { "show": props.show })}>
                <div className="modal-content">
                    <span className="close" onClick={(e) => props.reset(e, 'close')}>&times;</span>
                    <p><b>Your Order is Successfully Palced.</b></p>
                    <p>Total Price is: <b>{String(props.price) === 'NaN' ? '' : props.price}</b></p>
                </div>
            </div>
        </div>
    )
}