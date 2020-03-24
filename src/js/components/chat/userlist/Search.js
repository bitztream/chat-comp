import styled from 'styled-components';

const Search = styled.input`
	color: inherit;
	display: block;
  height: 38.5px;
  border: 2px solid #29272d;
  border-radius: 4px;
  outline: none;
  -webkit-appearance: none;
  background: #29272d;
	padding: 6.25px 12.5px;
  margin: 12.5px 0 25px 0;
	font-size: 14px;
	width: 100%;
  transition: box-shadow .1s ease-in, border .1s ease-in, background-color .1s ease-in;
	&:focus {
    background: rgb(4,1,9);
  	border-color: #ad00ff;
  }
  `
export default Search;
