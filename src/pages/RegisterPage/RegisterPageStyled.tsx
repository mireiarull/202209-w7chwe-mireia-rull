import styled from "styled-components";

export const RegisterPageStyled = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .logo {
    font-family: ${(props) => props.theme.secondaryFont};
    letter-spacing: 3px;
    font-size: 3rem;
    color: ${(props) => props.theme.featuredColor};
    margin: 0 auto;
  }
`;
