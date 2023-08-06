import React, { useEffect, useState } from "react";
import { Modal } from "../UI/Modal";
import { CartItem } from "./CartItem";
import { styled } from "styled-components";
import { TotalAmount } from "./TotalAmount";
import { Button } from "../UI/Button";

const fetchCartMeals = async () => {
  try {
    const response = await fetch(
      "http://ec2-3-76-44-71.eu-central-1.compute.amazonaws.com:5500/api/v1/basket",
      {
        headers: {
          UserID: "Umsunai",
        },
      }
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const Cart = ({ onClose }) => {
  const [cartMeals, setCartMealse] = useState([]);

  useEffect(() => {
    fetchCartMeals().then((data) => {
      setCartMealse(data.items);
    });
  }, []);

  const increaseAmountHandler = async (id, amount) => {
    try {
      const response = await fetch(
        `http://ec2-3-76-44-71.eu-central-1.compute.amazonaws.com:5500/api/v1/basketItem/${id}/update`,
        {
          method: "PUT",
          headers: {
            UserID: "Umsunai",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: amount + 1 }),
        }
      );
      const result = await response.json();
      console.log(result);

      fetchCartMeals().then((data) => setCartMealse(data.items));
    } catch (error) {
      console.log(error);
    }
  };

  const decreaseAmountHandler = async (id, amount) => {
    try {
      if (amount === 1) {
        const response = await fetch(
          `http://ec2-3-76-44-71.eu-central-1.compute.amazonaws.com:5500/api/v1/basketItem/${id}/delete`,
          {
            method: "DELETE",
            headers: {
              UserID: "Umsunai",
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        console.log(result);

        fetchCartMeals().then((data) => setCartMealse(data.items));
      } else {
        const response = await fetch(
          `http://ec2-3-76-44-71.eu-central-1.compute.amazonaws.com:5500/api/v1/basketItem/${id}/update`,
          {
            method: "PUT",
            headers: {
              UserID: "Umsunai",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: amount - 1 }),
          }
        );
        const result = await response.json();
        console.log(result);
        fetchCartMeals().then((data) => setCartMealse(data.items));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const totalAmount = cartMeals.reduce((total, meal) => {
    return total + meal.price * meal.amount;
  }, 0);

  return (
    <Modal onClose={onClose}>
      <Content>
        <CartList>
          {cartMeals.map((meal) => (
            <CartItem
              title={meal.title}
              amount={meal.amount}
              price={meal.price.toFixed(2)}
              key={meal._id}
              id={meal._id}
              onDecreaseMealAmount={decreaseAmountHandler}
              onIncreaseMealAmount={increaseAmountHandler}
            />
          ))}
        </CartList>
        <TotalAmount totalAmount={totalAmount} />
        <ActionsContainer>
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
          <Button onClick={() => console.log("ORDER")}>Order</Button>
        </ActionsContainer>
      </Content>
    </Modal>
  );
};

const ActionsContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 24px;
`;

const Content = styled("div")`
  padding: 1.5rem 1rem;
`;

const CartList = styled("ul")`
  list-style: none;
  display: flex;
  flex-direction: column;
  max-height: 360px;
  overflow-y: scroll;
`;
