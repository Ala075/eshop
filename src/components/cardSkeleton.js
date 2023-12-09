import React from 'react';
import Skeleton from 'react-loading-skeleton';
import img from '../asserts/cart.png';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    width:100%;
    height:100%;
    background-color:red;
`;
const Img = styled.img`
    width:100%;
    height:100%;
    object-fit:fill;
`;

const CardSkeleton = ({ cards }) => {
  return (
    <Container>
      {new Array(cards).fill(0).map((_, i) => (
        <div className="card-skeleton" key={i} >
          <div className="top">
            <Skeleton width={100} height={100}>
              <Img src={img} alt="Placeholder" />
            </Skeleton>
          </div>
          <div className="bottom">
            <Skeleton count={2} style={{ marginBottom: '0.6rem' }} />
          </div>
        </div>
      ))}
    </Container>
  );
};

export default CardSkeleton;
