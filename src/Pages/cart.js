import { useState } from "react";
import "./css/cart.css";

function Cart() {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("card"))  || []);

    return (
        <div className="cart-container">
            {cartItems.length > 0 ? (
                cartItems.map((product) => {
                    return <div key={product.id}>{product.name}</div>;
                })
            ) : (
                <p style={{ marginTop: "200px" }}>Cart Is Already Empty</p>
            )}
        </div>
    );
}
export default Cart;
