import styled from "styled-components";

const AppStyled = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.colorPrimary};
  padding: 0 ${(props) => props.theme.paddingHorizonalBody};
  min-height: 100vh;
`;

export default AppStyled;
