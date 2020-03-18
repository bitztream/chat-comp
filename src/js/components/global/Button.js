import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  border-radius: 4px;
  min-width: 37.5px;
  background: inherit;
  min-height: 37.5px;
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
  `
export default Button;
