import React from 'react'
import { css, styled } from 'styled-components'

const BUTTON_VARIANTS = {
	outlined: {
		bgColor: 'transparent',
		color: '#8a2b06',
		bgColorOnHover: '#8a2b06',
		bgColorOnActive: '#993108',
		disabled: {
			bgColor: 'transparent',
			color: '#cac6c4',
		},
	},
	contained: {
		bgColor: '#8a2b06',
		color: '#fff',
		bgColorOnHover: '#7e2a0a',
		bgColorOnActive: '#993108',
		disabled: {
			bgColor: '#cac6c4',
			color: '#fff',
		},
	},
}

const getStylesByVariant = (variant) => {
	const currentVariant = BUTTON_VARIANTS[variant]
	return css`
		background-color: ${currentVariant.bgColor};
		color: ${currentVariant.color};
		&:hover {
			background-color: ${currentVariant.bgColorOnHover};
		}
		&:active {
			background-color: ${currentVariant.bgColorOnActive};
		}
		&:disabled {
			background-color: ${currentVariant.disabled.bgColor};
			color: ${currentVariant.disabled.color};
		}
	`
}

const BUTTON_SIZES = {
	small: '14px',
	medium: '16px',
	large: '18px',
}

export const Button = ({
	children,
	onClick,
	disabled,
	variant = 'contained',
	size = 'medium',
	IconComponent = null,
	type = 'submit',
	...restProps
}) => {
	const isHasIcon = Boolean(IconComponent)
	return (
		<StyledButton
			onClick={onClick}
			disabled={disabled}
			variant={variant}
			icon={String(isHasIcon)}
			size={size}
			{...restProps}
		>
			{isHasIcon && <IconComponent />}
			{children}
		</StyledButton>
	)
}

const StyledButton = styled('button')`
	outline: none;
	cursor: pointer;
	padding: 0.625rem 2rem;
	border-radius: 20px;
	border: none;
	font-weight: 500;
	border: 1px solid #8a2b06;
	color: white;
	&:hover {
		color: white;
	}
	&:disabled {
		border: 1px solid #cac6c4;
		cursor: not-allowed;
	}
	transition: all 0.1s ease-out;
	${(props) => getStylesByVariant(props.variant || 'contained')}
	${(props) => {
		if (props.icon === 'false') return null
		return css`
			display: flex;
			align-items: center;
			gap: 10px;
			font-weight: 700;
		`
	}};
	font-size: ${(props) => BUTTON_SIZES[props.size || 'medium']};
`
