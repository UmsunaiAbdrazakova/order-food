import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { MealItem } from "./meal-item/MealItem";

// const DUMMY_MEALS = [
//   {
//     id: 1,
//     title: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: 2,
//     title: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.0,
//   },
//   {
//     id: 3,
//     title: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: 4,
//     title: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 19.99,
//   },
// ];

export const Meals = () => {
  const [meals, setMealse] = useState([]);

  useEffect(() => {
    const fetchMealse = async () => {
      try {
        const response = await fetch(
          "http://ec2-3-76-44-71.eu-central-1.compute.amazonaws.com:5500/api/v1/foods",
          {
            headers: {
              UserID: "Umsunai",
            },
          }
        );
        const result = await response.json();
        setMealse(result.data);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMealse();
  }, []);
  return (
    <Container>
      <ul>
        {meals.map((meal) => {
          return (
            <MealItem
              key={meal._id}
              title={meal.title}
              description={meal.description}
              price={meal.price}
              id={meal._id}
            />
          );
        })}
      </ul>
    </Container>
  );
};

const Container = styled("section")`
  padding: 40px;
  background-color: #ffffff;
  border-radius: 1rem;
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  & > ul {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    list-style: none;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
