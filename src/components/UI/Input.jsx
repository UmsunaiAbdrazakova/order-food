import React, { forwardRef } from "react";
import styled from "styled-components";

const Input = forwardRef(({value, onChange, id}, ref) => {
    console.log("amount" + id)
    
  return (
    <>
      <Label htmlFor={"amount" + id}>Amount</Label>
      <StyledInput
        ref={ref}
        type="number"
        id={"amount" + id}
        min="1"
        max="5"
        placeholder="1"
        value={value}
        onChange={onChange}
      />
    </>
  );
});

export default Input;

const Label = styled.label`
  margin-right: 1rem;
`;

const StyledInput = styled.input`
  width: 4rem;
  padding: 0.25rem;
  text-align: center;
`;
