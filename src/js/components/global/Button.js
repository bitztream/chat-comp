import styled from 'styled-components';

const Button = styled.button`
  display: flex;
	-webkit-appearance: none;
	border: 0;
	display: block;
	outline: none;
  border-radius: 4px;
  min-width: 37.5px;
  max-width: 37.5px;
	background: inherit;
  min-height: 37.5px;
  max-height: 37.5px;
  position: relative;
  text-align: center;
  justify-content: center;
  align-items: center;
  svg {
    display: flex;
    width: 25px;
    height: 25px;
  }
  &.right {
    transform: rotate(180deg);
  }
  &:hover {
    background: #303030;
  }
	&:active {
		box-shadow: 0 0 5px rgba(145, 71, 255, 0.5);
	}

  `
export default Button;
