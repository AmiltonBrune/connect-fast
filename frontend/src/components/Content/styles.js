import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.backgroud};
  padding: 25px;

  height: calc(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb {
    width: 26px;
    border-radius: 13px;
    background-clip: padding-box;
    border: 10px solid transparent;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px;
  }
`;
