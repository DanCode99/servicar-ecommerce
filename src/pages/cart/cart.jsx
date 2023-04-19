/* eslint-disable array-callback-return */
import React, {useContext} from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../contextApi/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css"

export const Cart = () => {
    const { cartItems, getTotalAmount } = useContext(ShopContext);
    const totalAmount = getTotalAmount();
    const navigate = useNavigate();

    return (
        <div className="cart">
            {totalAmount > 0 ? 
            <>
                <div className="cart-header">
                <h1>Your Cart Products</h1>
            </div>
            <div className="products-cart">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
                <div className="total-amount">
                    <p>Subtotal: $<span>{totalAmount}</span></p>
                    <div>
                    <button onClick={() => navigate("/")}>Continue Shopping</button>
                    <button>Continue to pay</button>
                    </div>
                </div>
            </>
            : <>
                <h1 >Your Cart is Empty</h1>
              </>
            
            }
        </div>
    )
};