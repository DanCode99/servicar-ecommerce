import React, {useContext} from "react";
import { ShopContext } from "../../contextApi/shop-context";
import "./shop.css"

export const Product = (props) => {

    const {id, productName, price, productImage} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const productAmount = cartItems[id];
    return (
        <div className="product" key={id}>
            <img src={productImage} alt="product item"/>
            <div className="description">
                <p className="product-name">{productName}</p>
                <p className="product-price">${price}</p>
            </div>
            <button className="addToCartBtn" onClick={() => addToCart(id)}>
                Add to cart {productAmount > 0 && <p>({productAmount})</p>}
            </button>
        </div>
    )
};

//code by dancode99