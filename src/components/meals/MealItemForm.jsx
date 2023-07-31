import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { IconButton } from "../UI/IconButton";
import Input from "../UI/Input";

const FormContainer = styled.form`

`;

const MealItemForm = ({ onAddToCart, id }) => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    onAddToCart(enteredAmount);
    setEnteredAmount("");
  };

  return (
    <FormContainer onSubmit={submitHandler}>
     <Input id={id} ref={inputRef} value={enteredAmount} onChange={(event) => setEnteredAmount(event.target.value)}/>
      <IconButton
        variant="contained"
        Icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4.16675V15.8334"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.16669 10H15.8334"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        Add
      </IconButton>
    </FormContainer>
  );
};

export default MealItemForm;
