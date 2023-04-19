/* Import Bootstrap JS */
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import shopLogo from "../../images/color-transparent.png";
import "./shop.css";
import Carousel from "./Carousel"; // Relative import of Carousel component

export const Shop = () => {
    return (
        <div className="shop">
                <Carousel />
            <div className="shop-title">
                <img src={shopLogo} alt="logo" />
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default Shop;