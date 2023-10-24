import { useState } from "react";
import styled from "styled-components";

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
    const [Items, setWashItems] = useState([]);

    return (
        <WashContainer>
            {Items.length > 0 ? (
                Items.map((product) => {
                    return <div key={product.id}>{product.name}</div>;
                })
            ) : (
                <EmptyWashMessage>Washlist Is Already Empty</EmptyWashMessage>
            )}
        </WashContainer>
    );
}

export default Washlist;
