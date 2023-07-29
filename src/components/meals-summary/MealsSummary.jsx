import React from "react";
import styled from "styled-components";
import { MealsBunnerImage } from "../../assets";

export const MealsSummary = () => {
  return (
    <section>
      <MainImageWrapper>
        <img src={MealsBunnerImage} alt="Meals" />
      </MainImageWrapper>
      <MealsSummaryConainer>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by  experienced chefs!
        </p>
      </MealsSummaryConainer>
    </section>
  );
};

const MainImageWrapper = styled("div")`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
  & > img {
    object-fit: cover;
  }
`;

const MealsSummaryConainer = styled("div")`
  text-align: center;
  max-width: 45rem;
  width: 45rem;
  margin: 0 auto;
  background-color: #383838;
  color: #ffffff;
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0px 6px 16px 0px #0000004d;
  margin-top: -10rem;
  position: relative;
  & > h2 {
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem;
  }
  & > p {
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem;
  }
`;
