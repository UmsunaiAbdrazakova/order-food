import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  cursor: pointer;
  ${({ variant }) => variantStyles[variant]};
  ${({ size }) => sizeStyles[size]};
`;

const variantStyles = {
  outlined: css`
    border: 1px solid #8a2b06;
    background-color: transparent;
    color: #8a2b06;
    &:hover:not(:disabled) {
      background-color: #8a2b06;
      color: #ffffff;
    }
    &:active:not(:disabled) {
      background-color: #993108;
    }
    &:disabled {
      color: #cac6c4;
      background-color: transparent;
      border: 1px solid #cac6c4;
    }
  `,
  contained: css`
    background-color: #8a2b06;
    color: #ffffff;
    &:hover:not(:disabled) {
      background: #7e2a0a;
    }
    &:active:not(:disabled) {
      background-color: #993108;
    }
    &:disabled {
      color: #ffffff;
      background: #cac6c4;
    }
  `,
};

const sizeStyles = {
  small: css`
    font-size: 14px;
  `,
  medium: css`
    font-size: 16px;
  `,
  large: css`
    font-size: 20px;
  `,
  default: css`
    font-size: 16px;
  `,
};

export const Button = ({
  children,
  onClick,
  disabled,
  variant,
  size = "default",
  ...restProps
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      size={size}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};
