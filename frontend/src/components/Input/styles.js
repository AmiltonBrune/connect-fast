import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  input {
    border: 2px solid transparent;
    border-radius: 50px;
    position: relative;
    width: 100%;
    height: 50px;
    padding: 0 30px;

    font-size: 16px;

    background: linear-gradient(white, white) padding-box,
      linear-gradient(to right, #6fcf97, #27ae60, #219653) border-box;
    text-indent: ${(props) => (props.icon ? `20px` : '0px')};
  }

  input::placeholder {
    color: #b7bcc7;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #b7bcc7;
  }

  ::-ms-input-placeholder {
    color: #b7bcc7;
  }

  label {
    position: absolute;
    top: -10px;
    z-index: 1;
    left: 30px;
    background-color: #fff;
    padding: 0 5px;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Icon = styled.div`
  height: 20px;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;
