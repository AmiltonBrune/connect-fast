import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Backgroud = styled.div`
  background-color: rgba(130, 135, 146, 0.56);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const Content = styled.div`
  width: ${(props) => props.width || '900px'};
  height: ${(props) => props.height || '570px'};
  background: white;
  color: white;
  z-index: 10;
  border-radius: 10px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

export const Title = styled.span`
  color: #000000;
  font-weight: 400;
  font-size: 18px;
  text-align: left;
`;

export const Header = styled.div`
  padding: 20px;
`;

export const Body = styled.div`
  padding: 10px;
  color: #000000;
  height: 100%;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 2px;
  margin-bottom: 10px;
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'right'};
  align-items: center;
  gap: 20px;
  padding: 20px;

  > button {
    font-size: 14px;
    width: 150px;
    height: 50px;
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 20px;
  border: none;
  font-size: 22px;
  color: #000000;
  background: #fff;
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;

  &:hover {
    opacity: 0.5;
    transition: all 0.25s ease;
  }
`;
