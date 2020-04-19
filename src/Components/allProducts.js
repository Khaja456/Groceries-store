import React from 'react';
import EachProduct from './product';
import ShopCart from './shopCart';

import prodcutsstore from '../utilites/prodcuts.json';
import '../Styles/allProducts.css';

let allProducts = prodcutsstore.products;

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: allProducts,
            quantity: 0,
            showModel: false
        }
        this.addToCart = this.addToCart.bind(this);
        this.toggleModel = this.toggleModel.bind(this);
    }

    componentDidMount() {

        // fetch('http://localhost:3001/products', {
        //     method: 'GET',
        //     mode: 'cors',
        //     cache: 'no-cache',
        //     credentials: 'same-origin',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     redirect: 'follow',
        //     referrerPolicy: 'no-referrer',
        // })
        //     .then(res => console.log(res))
        //     .then(data => console.log(data))
        //     .catch(err => console.error(err));

        this.setCartToDefault();
    }

    addToCart = (e, operation) => {
        let newProducts = this.state.products;
        if (operation === 'inc') newProducts[parseInt(e.target.value) - 1].incart++;
        else newProducts[parseInt(e.target.value) - 1].incart--;
        this.setState({ products: newProducts });
    }

    setCartToDefault = (e, operation) => {
        let newProducts = this.state.products.map(function (each) {
            return each['incart'] = 0;
        })
        this.setState({ product: newProducts });
        if (operation === 'close') this.toggleModel();
    }

    toggleModel = () => {
        this.setState(prevState => ({ showModel: !prevState.showModel }))
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.products.map(ecahProduct => <EachProduct key={ecahProduct.id} product={ecahProduct} add={this.addToCart} modify={this.changeCart} />)}
                </div>
                <ShopCart products={this.state.products} model={this.state.showModel} toggle={this.toggleModel} reset={this.setCartToDefault} />
            </div>
        )
    }
}