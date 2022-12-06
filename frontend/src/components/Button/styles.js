import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 50px;

  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;

  background: ${(props) =>
    props.bgColor
      ? props.bgColor
      : 'linear-gradient(to right,#6FCF97,  #27AE60 , #219653)'};

  border-radius: 50px;
  padding: 10px;

  transition: opacity 0.3s;

  border: ${(props) => (props.isBorder ? '2px solid transparent' : 'none')};

  > span {
    background: ${(props) =>
      props.color
        ? props.color
        : ' linear-gradient(to right, #6fcf97, #27ae60, #219653)'};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover {
    opacity: 0.7;
  }
`;
