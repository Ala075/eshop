import { useState } from "react";
import styled from "styled-components";

const WashContainer = styled.div`
    padding:80px;
    display: flex;
    justify-content: space-evenly;
    flex-direction:column;
`;

const Content = styled.div`
    display: flex;
    flex-direction:column;
    width:100%;
`;

const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:center;
    padding-block:10px;
    border-bottom:1px solid gray;
    
`;

const ImgContainer = styled.div`
    height:140px;
    width:140px;
`;

const Description = styled.div`
    display: flex;
    justify-content:flex-start;
    align-items: flex-start;
    flex-direction:column;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const Message = styled.p`
    display: flex;
    justify-content:center;
    width:100%;
    margin-top: 100px;
`;

function Wash() {
    const [WashItems, setWashItems] = useState(JSON.parse(localStorage.getItem("wash")) || []);

    const DeleteProduct = (productId) => {
        setWashItems((prev) => {
            const updatedWashItems = prev.filter(item => item.id !== productId);
            
            localStorage.setItem("wash", JSON.stringify(updatedWashItems));
            
            return updatedWashItems;
        });
    };
    
    
    return (
        <WashContainer>
            <Message>Wash List</Message>
            <Content>
                {WashItems.length > 0 ? 
                    WashItems.map((p, index) => {
                        return (  
                        <Row key={index}>
                            <ImgContainer>
                                <Img src={p.img} />
                            </ImgContainer>
                            <Description>
                                <p>{p.title}</p>
                                <p>{p.price}</p>
                                <button 
                              style={
                                  {outline: "none", border: "none", borderRadius: "5px",  width: "70px", height: "40px", backgroundColor: "var(--mainColor)", color: "white" }}
                              onClick={() => DeleteProduct(p.id)}
>
    Delete
                            </button>
                            </Description>
                        </Row>
                        );
                    })
                    :<Message>Wash Is Already Empty</Message>
                }
            </Content>
        </WashContainer>
    );
}
export default Wash;
