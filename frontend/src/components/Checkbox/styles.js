import styled from 'styled-components';

export const Container = styled.input`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 2px solid #27ae60;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: gray;
  }
`;
