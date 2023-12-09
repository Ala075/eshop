import { useState } from "react";
import styled from "styled-components";
import Card from "../components/card";

const WashContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const EmptyWashMessage = styled.p`
    margin-top: 200px;
`;

function Washlist() {
    const [Items, setWashItems] = useState(JSON.parse(localStorage.getItem("wash"))  || []);

    const DeleteProduct = (productId) => {
        setWashItems((prev) => {
            const updatedWashItems = prev.filter(item => item.id !== productId);
            localStorage.setItem("Wash", JSON.stringify(updatedWashItems));
            return updatedWashItems;
        });
    };

    return (
        <WashContainer>
            {Items.length > 0 ? (
                Items.map((p, index) => {
                    return (
                    <Card
                      key={index}
                      id={p.id}
                      img={p.img}
                      prix={p.price}
                      category={p.category}
                      name={p.title}
                      rating={p.rating}
                    />
                  );
                })
            ) : (
                <EmptyWashMessage>Washlist Is Already Empty</EmptyWashMessage>
            )}
            <button onClick={() => DeleteProduct(3)}>Delete</button>
        </WashContainer>
    );
}

export default Washlist;
