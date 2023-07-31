import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px; 
`;

export const IconButton = ({ Icon, children, ...restProps }) => {
  return (
    <Button {...restProps}>
      <StyledIcon>
        {Icon}
      </StyledIcon>
      {children}
    </Button>
  );
};




