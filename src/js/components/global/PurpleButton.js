import styled from 'styled-components';

const Button = styled.button`
  display: flex;
	-webkit-appearance: none;
	border: 0;
	outline: none;
	display: block;
  border-radius: 4px;
  min-width: 37.5px;
	width: 60px;
  background: #9147ff;
  min-height: 37.5px;
	max-height: 37.5px;
  font-weight: 700;
	font-size: 15px;
	color: inherit;
	position: relative;
  text-align: center;
  justify-content: center;
  align-items: center;
	align-self: flex-start;
  svg {
    display: flex;
    width: 25px;
    height: 25px;
  }
  &.right {
    transform: rotate(180deg);
  }
  &:hover {
    background: #5c16c5;
  }
	&:active {
		box-shadow: 0 0 5px rgba(145, 71, 255, 0.5);
		background: #451093;
	}
  `
export default Button;
