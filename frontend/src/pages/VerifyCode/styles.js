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
  background: ${(props) => props.theme.colors.white};
  width: 70%;
  height: 100vh;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 40px;

  --ReactInputVerificationCode-itemWidth: 3.5rem;
  --ReactInputVerificationCode-itemHeight: 3.5rem;

  .ReactInputVerificationCode__item.ReactInputVerificationCode__item {
    position: relative;
    color: ${(props) => props.theme.colors.black};
    font-weight: 500;
  }

  .ReactInputVerificationCode__item,
  .ReactInputVerificationCode__item.is-active {
    box-shadow: none;
  }

  .ReactInputVerificationCode__item:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 5px;
    background-color: #ebebeb;
    transition: background-color 0.2s ease-out;
    border-radius: 50px;
  }

  .ReactInputVerificationCode__item.is-active:after {
    background-color: #219653;
  }

  @media (max-width: 768px) {
    width: 100%;

    --ReactInputVerificationCode-itemWidth: 2.5rem;
    --ReactInputVerificationCode-itemHeight: 3.5rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 40px;
`;

export const TextFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.a`
  color: #27ae60;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;

  cursor: pointer;

  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 393px) {
    font-size: 14px;
  }
`;
