import styled from 'styled-components';

const Button = styled.button`
  display: flex;
	-webkit-appearance: none;
	border: 0;
	outline: none;
	color: inherit;
  border-radius: 4px;
  background: inherit;
  height: 37.5px;
	width: 87px;
  position: relative;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  font-weight: 500;
  font-size: 15px;
  margin-right: 10px;
  span {
    margin-left: 7px;
	}
  svg {
    display: flex;
    min-width: 25px;
    min-height: 25px;
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
