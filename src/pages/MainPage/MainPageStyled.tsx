import styled from "styled-components";

const MainPageStyled = styled.main`
  background-color: #efefef;
  height: 100vh;
  width: 100vw;

  .logo {
    font-family: ${(props) => props.theme.secondaryFont};
    letter-spacing: 3px;
    font-size: 2.5rem;
    color: ${(props) => props.theme.featuredColor};
    margin: 0 auto;
  }

  .count {
    color: #d543b2;
    font-weight: 600px;
  }
`;

export default MainPageStyled;
