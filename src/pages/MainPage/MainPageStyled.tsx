import styled from "styled-components";

const MainPageStyled = styled.main`
  background-color: #efefef;

  .logo {
    font-family: ${(props) => props.theme.secondaryFont};
    letter-spacing: 3px;
    font-size: 2.5rem;
    color: ${(props) => props.theme.featuredColor};
    margin: 0 auto;
  }

  .count {
    color: #000000;
    font-weight: 600px;
  }
`;

export default MainPageStyled;
