import React from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";

const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.3rem;
  border-radius: 1.5rem;
  border: 1px solid #d6d6d6;
  box-shadow: 0px 6px 12px 0px #24242414;
`;

const Title = styled.h3`
  color: #222222;
  font-size: 1.125rem;
  font-weight: 600;
`;

const Description = styled.p`
  color: #222222;
  font-size: 1rem;
  font-weight: 400;
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ad5502;
`;


const MealItem = ({id, title, description, price }) => {
  return (
    <ItemWrapper>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>${price}</Price>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </ItemWrapper>
  );
};

export default MealItem;
