import { useState } from "react";
import styled from "styled-components";
import Card from "../components/card";

const CartContainer = styled.div`
    padding-top:110px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
`;

const EmptyMessage = styled.p`
    margin-top: 200px;
`;

function Cart() {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    const DeleteProduct = (productId) => {
        setCartItems((prev) => {
            const updatedCartItems = prev.filter(item => item.id !== productId);
            localStorage.setItem("cart", JSON.stringify(updatedCartItems));
            return updatedCartItems;
        });
    };
    
    
    return (
        <CartContainer>
            {cartItems.length > 0 ? 
                cartItems.map((p, index) => {
                    return (
                    /* <Card
                      key={index}
                      id={p.id}
                      img={p.img}
                      prix={p.price}
                      category={p.category}
                      name={p.title}
                      rating={p.rating}
                    />
 */         
                    <div className="content">
                        <div className="row flex py-6 sm:py-6">
                            <div className="flex-shrink-0">
                                <img src={p.img} className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"/>
                            </div>
                            <p>{p.title}</p>
                        </div>
                    </div>
                    );
                })
                :<EmptyMessage>Cart Is Already Empty</EmptyMessage>
            }
        <button onClick={() => DeleteProduct(1)}>Delete</button>
        </CartContainer>
    );
}
export default Cart;
