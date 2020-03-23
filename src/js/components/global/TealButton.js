import styled from 'styled-components';

const Button = styled.button`
  display: flex;
	display: block;
  border-radius: 4px;
  width: 50px;
	-webkit-appearance: none;
	border: 0;
	outline: none;
  background: #00E6CD;
  height: 37.5px;
  position: relative;
  text-align: center;
  justify-content: center;
  align-items: center;
	align-self: flex-start;
  svg {
    margin: auto;
		display: flex;
    width: 25px;
    height: 25px;
  }
  &.right {
    transform: rotate(180deg);
  }
  &:hover {
    background: #00ad96;
  }
	&:active {
		background: #00E6CD;
		box-shadow: 0 0 5px rgba(145, 71, 255, 0.5);
	}

  `
export default Button;
