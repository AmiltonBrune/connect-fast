import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: none;
`;

export const Tille = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const Content = styled.div`
  background: #fff;
  width: 70%;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 40px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`;

export const ContentBackgroud = styled.div`
  background: ${(props) =>
    `linear-gradient(to right,${props.theme.colors.gradient})`};
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;

  border: none;

  > img {
    width: 80%;
    height: 80%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 40px;
`;
