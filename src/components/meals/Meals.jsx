import React from "react";
import styled from "styled-components";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: 1,
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.00,
  },
  {
    id: 3,
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: 4,
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];

const Meals = () => {
  const addToCartHandler = (amount) => {
    console.log("Добавленные данные в корзину:", amount);
  };

  return (
    <MealsContainer>
      {DUMMY_MEALS.map((meal) => (
        <MealItem
        id={meal.id}
          key={meal.id}
          title={meal.title}
          description={meal.description}
          price={meal.price}
          onAddToCart={addToCartHandler}
        />
      ))}
    </MealsContainer>
  );
};

const MealsContainer = styled("ul")`
  list-style: none;
  background-color: #ffffff;
  border-radius: 16px;
  max-width: 64rem;
  width: 64rem;
  margin: 0 auto;
  margin-top: 2rem;
`;
export default Meals;
