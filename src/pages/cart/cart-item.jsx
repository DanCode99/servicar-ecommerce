import React, {useContext} from "react";
import { ShopContext } from "../../contextApi/shop-context";
import "./cart.css"

export const CartItem = (props) => {

    const {id, productName, price, productImage} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartCount } = useContext(ShopContext)
    return (
    <div className="cart-item" key={id}>
        <img src={productImage} alt="products img"/>
        <div className="description">
            <p className="product-description">{productName}</p>
            <p className="poduct-price">${price}</p>
            <div className="count-handler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={e => updateCartCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
    )
}